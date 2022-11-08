import React, { useState, useContext } from "react";

import { motion } from "framer-motion";
import { FaCat, FaGithub } from "react-icons/fa";

import { urlFor } from "../../client";
import "./projects.scss";
import { DataContext } from "../../context/DataContext";

const Projects = () => {
  const { projects, filterProject, setFilterProject } = useContext(DataContext);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

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
        My <span>Portfolio</span>
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
              className={`projects__filter_item button-filter ${
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
          filterProject.map((project) => (
            <article className="projects__card card" key={project._id}>
              <div className="projects__card_image">
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  <img src={urlFor(project.imgUrl)} alt={project.name} />
                </a>
              </div>
              <div className="projects__card_content">
                <div className="projects__card_tags tech-text">
                  {project.tags[0]}
                </div>
                <h4 className="projects__card_title">
                  <a
                    href={project.demoLink}
                    alt={project.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>
                </h4>
                <p className="projects__card_tech tech-text">
                  <span className="tech-text">Stack:</span> {project.techStack}
                </p>
                <p className="projects__card_text">{project.description}</p>
                <div className="project__card_links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project__card_link"
                  >
                    View Project: <FaCat />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project__card_link"
                  >
                    View Code: <FaGithub />
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
