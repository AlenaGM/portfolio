import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import BlockContent from "@sanity/block-content-to-react";

//import AppWrap from "../../wrapper/AppWrap";
import "./skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experiencesQuery =
      '*[_type == "experiences"] | order(year desc) { _id, year, works[]->}';
    const skillsQuery = '*[_type == "skills"]';

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
    <>
      <h2 className="skills__title">
        <span>Skills</span> & Experience
      </h2>

      <div className="skills__intro">
        Here are the major tools I use to bring my projects to life and my
        latest work experiences.
      </div>

      <div className="skills__container">
        <motion.div className="skills__list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills__list_item"
              key={skill._id}
            >
              <div>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="skills__exp">
          {experiences.map((experience) => (
            <motion.div className="skills__exp_item" key={experience._id}>
              <div className="skills__exp_year">
                <p>{experience.year}</p>
              </div>
              <motion.div className="skills__exp_works">
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="skills__exp_work"
                    key={work._id}
                  >
                    <h4 className="work_name">{work.name}</h4>
                    <p className="work_company">{work.company}</p>
                    <div className="work_description">
                      <BlockContent
                        blocks={work.description}
                        projectId="process.env.REACT_APP_SANITY_PROJECT_ID"
                        dataset="production"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="work_current">
        <h4>Currently I'm working on</h4>
        <p>Learning wordpress and revising javascript</p>
      </div>
    </>
  );
};

export default Skills;
//export default AppWrap(Skills, "skills");
