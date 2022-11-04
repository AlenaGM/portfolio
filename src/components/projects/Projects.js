import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import { TfiGithub } from "react-icons/tfi";

//import AppWrap from "../../wrapper/AppWrap";
import "./projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
        setFilterProject(data);
      })
      .catch(console.error);
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="projects__title">
        My <span>Portfolio</span> section
      </h2>
      <div className="projects__intro">
        Here are the major tools I use to bring my projects to life and my
        latest work experiences.
      </div>
      <div className="projects__filter">
        {["React", "Vue", "JavaScript", "Wordpress", "Components", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleProjectFilter(item)}
              className={`projects__filter_item ${
                activeFilter === item ? `${item}_active` : item
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="projects__container"
      >
        {projects &&
          filterProject.map((project, index) => (
            <article className="projects__item" key={index}>
              <div className="projects__item_image">
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  <img src={urlFor(project.imgUrl)} alt={project.name} />
                </a>
              </div>

              <div className="projects__item_content">
                <div className="projects__item_tags">
                  <p>{project.tags[0]}</p>
                </div>

                <h4 className="projects__item_title">
                  <a
                    href={project.demoLink}
                    alt={project.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                </h4>

                <p className="projects__item_tech" style={{ marginTop: 10 }}>
                  <span>Tech stack:</span> {project.techStack}
                </p>

                <p className="projects__item_text" style={{ marginTop: 10 }}>
                  {project.description}
                </p>

                <div className="project__item_links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project__item_link"
                  >
                    View Project: 😺
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project__item_link"
                  >
                    View Code: 💻
                  </a>
                </div>
              </div>
            </article>
          ))}
      </motion.div>
    </>
  );
};

export default Projects;
//export default AppWrap(Projects, "project");
