import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";

import { urlFor, client } from "../../client";
import "./about.scss";

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const query = '*[_type == "author"]{name, image, bio}';

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
          <PortableText
            value={author.bio}
            projectId="process.env.REACT_APP_SANITY_PROJECT_ID"
            dataset="production"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            a officiis suscipit error, tenetur eius et laudantium, pariatur cum
            natus ducimus maiores iusto. Nisi aspernatur maiores consectetur?
            Facilis exercitationem ipsam, expedita harum quibusdam debitis.
            Dicta saepe iste deleniti inventore obcaecati nam impedit sapiente
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

//export default AppWrap(About, "about");
