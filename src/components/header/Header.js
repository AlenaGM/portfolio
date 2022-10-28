import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app__header header">
      <div className="header__navbar">
        <Link to="/">
          <div className="header__navbar_logo">
            <h1 className="header__navbar_title">
              <span>Alena</span> Frontend developer
            </h1>
          </div>
        </Link>

        <nav className="header__menu">
          <ul className="header__menu_links">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="header__menu_link">
                <NavLink
                  end
                  style={({ isActive }) => ({
                    color: isActive && "#8dd0ff",
                  })}
                  to={`/${item}`}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__resume" type="button">
          <a
            className="button"
            href="https://github.com/AlenaGM"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
        <p
          className="header__burger_icon-open"
          onClick={() => setMenuOpen(true)}
        >
          Open
        </p>
        {menuOpen && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="header__burger"
          >
            <p
              className="header__burger_icon-close"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </p>
            <ul className="header__burger_links">
              {["home", "skills", "work", "contact"].map((item) => (
                <li key={item} className="header__burger_link">
                  <NavLink
                    end
                    to={`/${item}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  className="button"
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
    </header>
  );
};

export default Header;
