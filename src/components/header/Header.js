import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import logo from "../../assets/images/logo.png";

import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app__header">
      <Link to="/">
        <div>
          <img className="app__header_logo" src={logo} alt="logo" />
          <h1 className="app__header_title">
            <span>Alena</span> Frontend developer
          </h1>
        </div>
      </Link>
      <nav className="app__header_menu">
        <ul>
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li>
              <NavLink
                end
                style={({ isActive }) => ({
                  color: isActive ? "#3ABDB5" : "inherit",
                })}
                to={`/${item}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li className="app__header_resume button" type="button">
            <a
              href="https://github.com/AlenaGM"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="app__header_social">
        <SocialIcon
          url="https://github.com/AlenaGM"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/alena-guillaume/"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://t.me/alenagm"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </header>
  );
};

export default Header;
