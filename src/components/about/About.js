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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta
            eaque asperiores autem quos tempore dolores! Temporibus obcaecati
            aspernatur vero odio quos quia aliquid voluptatibus. Consequuntur
            accusamus enim in vel ullam perferendis officiis neque voluptatem at
            aperiam quos similique possimus ad autem repellendus, necessitatibus
            quasi quod id, beatae modi excepturi corporis sunt sapiente! Labore,
            vero corporis. Sunt odio excepturi deserunt quas sit ratione facilis
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(About, "about");
