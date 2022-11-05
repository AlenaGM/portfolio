import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import classnames from "classnames";
import { SocialIcon } from "react-social-icons";
import preventScroll from "prevent-scroll";
import "./header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeBurgerMenu = () => {
    setMenuOpen(false);
    preventScroll.off();
  };

  const toggleBurgerIcon = () => {
    if (menuOpen) {
      setMenuOpen(false);
      preventScroll.off();
    } else {
      setMenuOpen(true);
      preventScroll.on();
    }
  };

  const burgerIconClasses = classnames({
    navbar__burger_icon: true,
    active: menuOpen,
  });

  return (
    <>
      <header className="app__header">
        <div className="header__navbar navbar">
          <Link to="/">
            <div className="navbar__logo">
              <h1 className="navbar__title">
                <span>Alёna</span> Frontend developer
              </h1>
            </div>
          </Link>

          <nav className="navbar__menu">
            <ul className="navbar__menu_links">
              <li key="home" className="navbar__menu_link">
                <NavLink
                  end
                  style={({ isActive }) => ({
                    color: isActive && "#6cc2ff",
                  })}
                  to={`/`}
                >
                  home
                </NavLink>
              </li>
              {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item} className="navbar__menu_link">
                  <NavLink
                    end
                    style={({ isActive }) => ({
                      color: isActive && "#6cc2ff",
                    })}
                    to={`/${item}`}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__buttons">
            <div className="navbar__social">
              <SocialIcon
                url="https://www.linkedin.com/in/alena-guillaume/"
                fgColor="#6cc2ff"
                bgColor="transparent"
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: "50%",
                  border: "solid 2px #6cc2ff",
                }}
              />
              <SocialIcon
                url="https://github.com/AlenaGM"
                target="_blank"
                fgColor="#6cc2ff"
                bgColor="transparent"
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: "50%",
                  border: "solid 2px #6cc2ff",
                }}
              />
            </div>

            <div className="navbar__resume" type="button">
              <a
                className="button"
                href="https://github.com/AlenaGM"
                target="_blank"
                rel="noreferrer"
                onClick={() => closeBurgerMenu()}
              >
                Resume
              </a>
            </div>

            <div
              className={burgerIconClasses}
              onClick={() => toggleBurgerIcon()}
            >
              <span />
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <motion.div
            whileInView={{ x: [280, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="header__burger"
          >
            <ul className="header__burger_links">
              <li key="home" className="header__burger_link">
                <NavLink end to={`/`} onClick={() => closeBurgerMenu()}>
                  home
                </NavLink>
              </li>
              {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item} className="header__burger_link">
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
            className="header__burger_overlay"
            onClick={() => closeBurgerMenu()}
          />
        </>
      )}
    </>
  );
}

export default Header;
