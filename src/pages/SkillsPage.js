import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Skills from "../components/skills/Skills";
import Spinner from "../components/spinner/Spinner";
import NothingToShow from "../components/errors/NothingToShow";

const SkillsPage = () => {
  const { errors, loading, skills, experiences } = useContext(DataContext);

  const spinner = loading ? <Spinner /> : null;
  const error = errors ? <NothingToShow /> : null;
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
