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
    <section className="app__about">
      <img src={urlFor(author.image)} alt={author.name} />
      <div>
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
          aut unde recusandae odit adipisci autem mollitia cupiditate ex
          necessitatibus alias. Iure in placeat expedita deserunt earum iste
          quibusdam fugit tempora, suscipit ab consectetur alias accusamus
          explicabo tenetur fuga nostrum nemo vel quam sapiente perferendis
          veniam molestias. Nobis iste, blanditiis dolores assumenda aspernatur
          esse tempora maxime eum nisi libero harum facere velit repellat
          corporis, sunt minima hic laudantium id? Enim ex cumque obcaecati.
          Vero maxime dignissimos accusamus officiis non maiores reiciendis
          minima, repellat officia aperiam ab alias nisi qui suscipit. Minus hic
          dignissimos dolorem nulla corporis dolor. Aut, non, magnam nemo
          tempora possimus eaque fuga debitis voluptate beatae voluptatum
          voluptatibus architecto aspernatur, nisi recusandae dolore similique
          laudantium dolores aliquid in. Atque accusamus nesciunt delectus
          eligendi, sed, necessitatibus est ut vero quidem voluptatum rerum
          ipsam quae quia eum odio fuga reiciendis nam ex. Maxime, at soluta
          repellendus laborum adipisci aliquid, deleniti nam deserunt, eveniet
          libero ratione nesciunt facere repellat eligendi distinctio quaerat!
          Officiis incidunt voluptate placeat? Natus dignissimos possimus cum
          dicta sequi accusantium inventore tenetur? Praesentium cum fugit ut,
          minima temporibus optio autem placeat rerum saepe voluptatem delectus?
        </div>
      </div>
    </section>
  );
};

export default AppWrap(About, "about");
