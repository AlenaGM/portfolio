import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Skills from "../components/skills/Skills";

const SkillsPage = () => {
  const { errors, loading, skills, experiences } = useContext(DataContext);

  const spinner = loading ? <div>spinner</div> : null;
  const error = errors ? <div>error</div> : null;
  const content = !(loading || errors) ? (
    <Skills skills={skills} experiences={experiences} />
  ) : null;

  return (
    <div className="app__skills">
      {error}
      {spinner}
      {content}
    </div>
  );
};

export default SkillsPage;
