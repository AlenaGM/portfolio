import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Projects from "../components/projects/Projects";
import Spinner from "../components/spinner/Spinner";
import NothingToShow from "../components/errors/NothingToShow";

const ProjectsPage = () => {
  console.log("render projects");
  const { errors, loading, projects } = useContext(DataContext);

  const spinner = loading ? <Spinner /> : null;
  const error = errors ? <NothingToShow /> : null;
  const content = !(loading || errors) ? (
    <Projects projects={projects} />
  ) : null;

  return (
    <div className="app__projects">
      {error}
      {spinner}
      {content}
    </div>
  );
};

export default ProjectsPage;
