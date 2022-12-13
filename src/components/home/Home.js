import "./home.scss";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <h2 className="home__title">
        Hi, I'm <span>Alena </span> <br /> React Frontend Developer
      </h2>
      <div className="home__intro">
        Take a look at{" "}
        <Link to="/projects">
          <span>my work</span>
        </Link>
        , learn{" "}
        <Link to="/about">
          <span>about me</span>
        </Link>
        , or{" "}
        <Link to="/contact">
          <span>get in touch</span>
        </Link>{" "}
        to chat.
      </div>
    </div>
  );
};

export default Home;
