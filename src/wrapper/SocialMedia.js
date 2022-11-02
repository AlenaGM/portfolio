import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <SocialIcon
        url="https://github.com/AlenaGM"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 37, width: 37 }}
      />
      <SocialIcon
        url="https://www.linkedin.com/in/alena-guillaume/"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://t.me/alenagm"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
    </div>
  );
};

export default SocialMedia;
