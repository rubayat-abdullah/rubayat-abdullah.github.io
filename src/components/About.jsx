import { aboutContent } from "../data/config";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <div className="about-content">
            <p className="about-text">{aboutContent.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
