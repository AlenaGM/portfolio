import React from "react";
import { SocialIcon } from "react-social-icons";

const NavigationDots = () => {
  return (
    <div className="app__navigation-dots">
      <SocialIcon
        url="https://github.com/AlenaGM"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
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

export default NavigationDots;
