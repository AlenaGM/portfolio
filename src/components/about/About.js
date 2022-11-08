import { PortableText } from "@portabletext/react";

import { urlFor } from "../../client";
import "./about.scss";

const About = ({ author }) => {
  return (
    <>
      <div className="about__container">
        <div className="about__portrait">
          <div>
            <img src={urlFor(author.image)} alt={author.name} />
          </div>
        </div>
        <div className="about__presentation">
          <h2 className="about__title">
            Hi. My name is <span>{author.name}</span>
          </h2>
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
