import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".section-title, .skill-card, .project-card, .timeline-item, .blog-card, .about-content, .contact-container"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal", "active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        revealObserver.unobserve(element);
      });
    };
  }, []);
};

export default useScrollReveal;
