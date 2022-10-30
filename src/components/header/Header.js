import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import classnames from "classnames";

import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeBurgerMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const openBurgerMenu = () => {
    setMenuOpen(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const burgerIconClasses = classnames({
    navbar__burger_icon: true,
    active: menuOpen,
  });

  return (
    <header className="app__header">
      <div className="header__navbar navbar">
        <Link to="/">
          <div className="navbar__logo">
            <h1 className="navbar__title">
              <span>Alena</span> Frontend developer
            </h1>
          </div>
        </Link>

        <nav className="navbar__menu">
          <ul className="navbar__menu_links">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="navbar__menu_link">
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

        <div className="navbar__resume" type="button">
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

        <div className={burgerIconClasses} onClick={() => openBurgerMenu()}>
          <span />
        </div>

        {menuOpen && (
          <>
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="navbar__burger"
            >
              <div
                className={burgerIconClasses}
                onClick={() => closeBurgerMenu()}
              >
                <span />
              </div>
              <ul className="navbar__burger_links">
                {["home", "skills", "work", "contact"].map((item) => (
                  <li key={item} className="navbar__burger_link">
                    <NavLink
                      end
                      to={`/${item}`}
                      onClick={() => closeBurgerMenu()}
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
                    onClick={() => closeBurgerMenu()}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
            <div
              className="navbar__burger_overlay"
              onClick={() => closeBurgerMenu()}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
