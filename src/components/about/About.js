import "./about.scss";

import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import AppWrap from "../../wrapper/AppWrap";

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const query = '*[_type == "author"]';

    client
      .fetch(query)
      .then((data) => {
        setAuthor(data[0]);
      })
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <>
      <h2 className="about__title">
        Hi there. My name is <span>{author.name}</span>
      </h2>
      <div className="about__container">
        <div className="about__portrait">
          <div>
            <img src={urlFor(author.image)} alt={author.name} />
          </div>
        </div>
        <div className="about__presentation">
          <BlockContent
            blocks={author.bio}
            projectId="process.env.REACT_APP_SANITY_PROJECT_ID"
            dataset="production"
          />
        </div>
      </div>
    </>
  );
};

export default AppWrap(About, "about");
