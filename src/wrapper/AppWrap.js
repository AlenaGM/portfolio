import React from "react";
import SocialMedia from "./SocialMedia";
import NavigationDots from "./NavigationDots";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper">
          <Component />
        </div>
        <NavigationDots />
      </div>
    );
  };

export default AppWrap;
