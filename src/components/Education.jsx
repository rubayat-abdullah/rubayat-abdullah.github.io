import { education } from "../data/config";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{edu.date}</span>
                <h3>{edu.degree}</h3>
                <h4>
                  {edu.institutionUrl ? (
                    <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer">
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )}
                </h4>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
