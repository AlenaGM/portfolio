import { useState, useEffect, createContext } from "react";
import { client } from "../client";

export const DataContext = createContext();

function DataContextProvider(props) {
  const [author, setAuthor] = useState(null);
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(false);

  const authorQuery = '*[_type == "author"]{name, image, bio}';
  const skillsQuery = '*[_type == "skills"] | order(order) {icon, name}';
  const experiencesQuery =
    '*[_type == "experiences"] | order(year desc) {year, works[]->}';
  const projectsQuery =
    '*[_type == "projects"] | order(date desc) {_id, title, description, imgUrl, techStack, demoLink, codeLink, tags[]}';

  useEffect(() => {
    getAuthor();
    getSkills();
    getExperiences();
    getProjects();
  }, []);

  const getAuthor = () => {
    setLoading(true);
    client
      .fetch(authorQuery)
      .then((data) => {
        setAuthor(data[0]);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setLoading(false);
      });
  };

  const getSkills = () => {
    setLoading(true);
    client
      .fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setLoading(false);
      });
  };

  const getExperiences = () => {
    client
      .fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setLoading(false);
      });
  };

  const getProjects = () => {
    client
      .fetch(projectsQuery)
      .then((data) => {
        setProjects(data);
        setFilterProject(data);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setLoading(false);
      });
  };

  const sendForm = (formData) => {
    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <DataContext.Provider
      value={{
        author,
        skills,
        experiences,
        projects,
        filterProject,
        loading,
        errors,
        isFormSubmitted,
        setAuthor,
        setSkills,
        setExperiences,
        setProjects,
        setFilterProject,
        sendForm,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
