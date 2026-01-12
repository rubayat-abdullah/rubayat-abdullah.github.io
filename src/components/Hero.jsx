import { siteConfig, socialLinks } from "../data/config";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting animate-fade-up">Hello, I'm</p>
          <h1 className="hero-name animate-fade-up delay-1">{siteConfig.name}</h1>
          <p className="hero-title animate-fade-up delay-2">
            {siteConfig.title} at{" "}
            <a href={siteConfig.institution.url} target="_blank" rel="noopener noreferrer">
              {siteConfig.institution.name}
            </a>
          </p>
          <p className="hero-bio animate-fade-up delay-3">{siteConfig.bio}</p>
          <div className="hero-cta animate-fade-up delay-4">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Work
            </a>
          </div>
          <div className="hero-social animate-fade-up delay-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="social-link"
                aria-label={link.name}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image animate-fade-left delay-2">
          <div className="profile-photo">
            <img src={siteConfig.profileImage} alt={siteConfig.name} />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
