import "./home.scss";

import React from "react";
import { Link } from "react-router-dom";

const Home = ({ author }) => {
  return (
    <>
      <div className="home__container">
        <div className="home__intro">
          <h2>Hi, I'm Alena. React Frontend Developer</h2>
          <div>
            Take a look at my{" "}
            <Link to="/projects">
              <span>work</span>
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
        <div className="home__about">
          {author.pitch}
          <Link to="/about">Know more</Link>
        </div>
        <div className="home__projects">
          <h3>My resent work</h3>
          <div>Here are a few past design projects I've worked on. </div>
          <Link to="/projects">Want to see more?</Link>
        </div>
        <div className="home__contact">
          <h3>Interested in collaborating with me?</h3>
          <div>
            I’m always open to discussing product design work or partnership
            opportunities.
          </div>
          <Link to="/contact">Start a conversation</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
