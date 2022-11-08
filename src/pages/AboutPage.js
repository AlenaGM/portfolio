import { useContext } from "react";

import { DataContext } from "../context/DataContext";
import About from "../components/about/About";
import Spinner from "../components/spinner/Spinner";
import NothingToShow from "../components/errors/NothingToShow";

const AboutPage = () => {
  console.log("render about");
  const { errors, loading, author } = useContext(DataContext);

  const spinner = loading ? <Spinner /> : null;
  const error = errors ? <NothingToShow /> : null;
  const content = !(loading || errors) ? <About author={author} /> : null;

  return (
    <div className="app__about">
      {error}
      {spinner}
      {content}
    </div>
  );
};

export default AboutPage;
