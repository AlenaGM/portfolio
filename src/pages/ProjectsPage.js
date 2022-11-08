import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Projects from "../components/projects/Projects";

const ProjectsPage = () => {
  const { errors, loading, projects } = useContext(DataContext);

  const spinner = loading ? <div>spinner</div> : null;
  const error = errors ? <div>error</div> : null;
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
