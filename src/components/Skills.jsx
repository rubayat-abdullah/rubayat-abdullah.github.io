import { skills } from "../data/config";

const Skills = () => {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>
                {skill.link ? (
                  <>
                    {skill.description.split(" at ")[0]} at{" "}
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
                      {skill.description.split(" at ")[1]}
                    </a>
                  </>
                ) : (
                  skill.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
