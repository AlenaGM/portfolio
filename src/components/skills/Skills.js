import { PortableText } from "@portabletext/react";

import { urlFor } from "../../client";
import "./skills.scss";

const Skills = ({ skills, experiences }) => {
  return (
    <div>
      <h2 className="skills__title">
        <span>Skills</span> & Experience
      </h2>

      <div className="skills__intro">
        Here are the major tools I use to bring my projects to life and my
        latest work experiences.
      </div>

      <div className="skills__container">
        <div className="skills__list">
          {skills.map((skill) => (
            <div className="skills__list_item" key={skill.name}>
              <div>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="tech-text">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="skills__exp">
          {experiences.map((experience) => (
            <div className="skills__exp_item" key={experience.year}>
              <div className="skills__exp_year">{experience.year}</div>
              <div className="skills__exp_works">
                {experience.works.map((work) => (
                  <div className="skills__exp_work" key={work.name}>
                    <h4 className="work_name">{work.name}</h4>
                    <p className="work_company">{work.company}</p>
                    <div className="work_description">
                      <PortableText
                        value={work.description}
                        projectId="process.env.REACT_APP_SANITY_PROJECT_ID"
                        dataset="production"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills_current">
        <h3>Currently I'm working on</h3>
        <p>Learning wordpress and revising javascript</p>
      </div>
    </div>
  );
};

export default Skills;
