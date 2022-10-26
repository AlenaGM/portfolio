import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

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
      <nav className="app__navbar">
        <ul className="app__navbar_links">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
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
        <div className="app__navbar_menu">
          <p onClick={() => setMenuOpen(true)}>Open</p>
          {menuOpen && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <p onClick={() => setMenuOpen(false)}>Close</p>
              <ul>
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <NavLink
                        end
                        style={({ isActive }) => ({
                          color: isActive ? "#3ABDB5" : "inherit",
                        })}
                        to={`/${item}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </NavLink>
                    </li>
                  )
                )}
                <li className="app__header_resume button" type="button">
                  <a
                    href="https://github.com/AlenaGM"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
      <div className="app__header_social">
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
    </header>
  );
};

export default Header;
