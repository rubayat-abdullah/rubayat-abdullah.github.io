// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.querySelector(".theme-toggle");
const html = document.documentElement;

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("dark");

  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  // Add a subtle animation to the toggle
  themeToggle.style.transform = "scale(0.9)";
  setTimeout(() => {
    themeToggle.style.transform = "scale(1)";
  }, 150);
});

// ========================================
// Mobile Navigation Toggle
// ========================================
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "";
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Add/remove scrolled class
  if (currentScrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollY = currentScrollY;
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll("section[id]");

const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -80% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// ========================================
// Scroll Reveal Animations
// ========================================
const revealElements = document.querySelectorAll(
  ".section-title, .skill-card, .project-card, .timeline-item, .blog-card, .about-content, .contact-container"
);

const revealOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal", "active");
      revealObserver.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

// ========================================
// Smooth Scroll for Safari
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ========================================
// Form Handling
// ========================================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual form handling)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success message
    submitBtn.textContent = "Message Sent!";
    submitBtn.style.background = "#10b981";

    // Reset form
    contactForm.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = "";
      submitBtn.disabled = false;
    }, 3000);
  });
}

// ========================================
// Typing Effect for Hero (Optional Enhancement)
// ========================================
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.textContent = "";

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
};

// ========================================
// Parallax Effect for Hero (Subtle)
// ========================================
const hero = document.querySelector(".hero");
const profilePhoto = document.querySelector(".profile-photo");

if (hero && profilePhoto) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;

    if (scrolled < window.innerHeight) {
      profilePhoto.style.transform = `translateY(${rate * 0.2}px)`;
    }
  });
}

// ========================================
// Card Tilt Effect (Subtle)
// ========================================
const cards = document.querySelectorAll(
  ".project-card, .skill-card, .blog-card"
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

// ========================================
// Page Load Animation
// ========================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ========================================
// Console Easter Egg
// ========================================
console.log("%c👋 Hello there!", "font-size: 24px; font-weight: bold;");
console.log(
  "%cWelcome to my portfolio. Feel free to explore the code!",
  "font-size: 14px; color: #666;"
);
console.log(
  "%c— Rubayat Al Abdullah",
  "font-size: 12px; font-style: italic; color: #888;"
);
