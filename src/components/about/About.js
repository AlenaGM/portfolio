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
            and I enjoy creating things that live on the internet. My interest
            in web development started back in 2012 when I decided to try
            editing custom Tumblr themes — turns out hacking together a custom
            reblog button taught me a lot about HTML & CSS! Fast-forward to
            today, and I’ve had the privilege of working at an advertising
            agency, a start-up, a huge corporation, and a student-led design
            studio. My main focus these days is building accessible, inclusive
            products and digital experiences at Upstatement for a variety of
            clients. I also recently launched a course that covers everything
            you need to build a web app with the Spotify API using Node & React.
            Here are a few technologies I’ve been working with recently:
            JavaScript (ES6+) TypeScript React Eleventy Node.js WordPress Since
            beginning my journey as a frontend developer, I've done remote work
            for agencies, consulted for startups, and collaborated with talented
            people to create digital products for both business and consumer
            use. I like to code things from scratch, and enjoy bringing ideas to
            life. I'm quietly confident, naturally curious, and perpetually
            working on improving my chops one design problem at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
