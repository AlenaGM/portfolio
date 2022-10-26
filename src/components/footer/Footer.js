import { SocialIcon } from "react-social-icons";
import "./footer.scss";

import React from "react";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer_social">
        <SocialIcon
          url="https://github.com/AlenaGM"
          target="_blank"
          rel="noreferrer"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/alena-guillaume/"
          target="_blank"
          rel="noreferrer"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://t.me/alenagm"
          target="_blank"
          rel="noreferrer"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </div>
  );
};

export default Footer;
