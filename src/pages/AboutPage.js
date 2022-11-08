import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import About from "../components/about/About";

const AboutPage = () => {
  const { errors, loading, author } = useContext(DataContext);

  const spinner = loading ? <div>spinner</div> : null;
  const error = errors ? <div>error</div> : null;
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
