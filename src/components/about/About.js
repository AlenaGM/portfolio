import "./about.scss";

import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";
//import AppWrap from "../../wrapper/AppWrap";

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
            nihil alias assumenda, velit fugit natus cum tenetur labore
            repudiandae quaerat nostrum eius blanditiis sed. Atque doloremque
            illo a molestias tempore ducimus molestiae aperiam nisi, possimus
            porro quod ab cupiditate quaerat quis harum iusto maiores? Est cum
            amet dicta reprehenderit odio quas nihil modi ipsa distinctio dolore
            necessitatibus esse officia, autem expedita accusantium ut tempore.
            Animi, tempora?
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

//export default AppWrap(About, "about");
