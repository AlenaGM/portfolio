import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import "./skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experiencesQuery =
      '*[_type == "experiences"] | order(year desc) {year, works[]->}';
    const skillsQuery = '*[_type == "skills"] | order(order) {icon, name}';

    client
      .fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data);
      })
      .catch(console.error);

    client
      .fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="skills__title">
        <span>Skills</span> & Experience
      </h2>

      <div className="skills__intro">
        Here are the major tools I use to bring my projects to life and my
        latest work experiences.
      </div>

      <motion.div
        className="skills__container"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>

      <div className="skills_current">
        <h3>Currently I'm working on</h3>
        <p>Learning wordpress and revising javascript</p>
      </div>
    </div>
  );
};

export default Skills;
