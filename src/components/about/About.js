import "./about.scss";

import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
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
    <section className="about__me">
      <div className="me_image">
        <img src={urlFor(author.image)} alt={author.name} />
      </div>
      <div className="me_presentation">
        <h3>
          Hi there. My name is <span>{author.name}</span>
        </h3>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          fugiat doloribus ipsa dolorum eveniet atque dolor facilis ipsum quasi
          aspernatur magnam libero, odit, cumque consectetur incidunt voluptas
          possimus voluptatibus repellat natus corporis molestias, quo qui odio.
          Temporibus itaque aliquam consectetur, illum id, nobis, magnam
          architecto provident animi voluptatem fugiat sunt pariatur corrupti
          quis dolor corporis fuga cum facere! Obcaecati exercitationem
          reiciendis minus explicabo temporibus sunt voluptas, assumenda ea quis
          cumque velit harum numquam quasi architecto nostrum nihil fugiat nam
          nesciunt vel, laboriosam repellendus ducimus minima dignissimos
          recusandae! Tenetur magnam aut rerum quisquam non dolorem saepe
          accusantium ea provident, deserunt eveniet impedit unde consectetur
          voluptates assumenda ut? Similique sit quia, vel officia accusantium
          sed iure, in neque est distinctio minus aperiam iusto impedit sequi,
        </div>
      </div>
    </section>
  );
};

export default AppWrap(About, "about");
