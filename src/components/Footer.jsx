import { siteConfig } from "../data/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="footer-tagline">{siteConfig.bio}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
