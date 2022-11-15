import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import classnames from "classnames";
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

  const resumeLink =
    "https://github.com/AlenaGM/AlenaGM/blob/200cebfd17f896933342cc60ad94ac663c4219f2/CV_Alena%20Guillaume_Frontend.pdf/";

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
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item} className="navbar__menu_link">
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive && "#00cccc",
                      })}
                      to={`/${item}`}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="navbar__buttons">
            <div className="navbar__social">
              <SocialIcon
                url="https://www.linkedin.com/in/alena-guillaume/"
                target="_blank"
                rel="noreferrer"
                fgColor="#00cccc"
                bgColor="transparent"
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: "50%",
                  border: "solid 2px #00cccc",
                }}
              />
              <SocialIcon
                url="https://github.com/AlenaGM"
                target="_blank"
                rel="noreferrer"
                fgColor="#00cccc"
                bgColor="transparent"
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: "50%",
                  border: "solid 2px #00cccc",
                }}
              />
            </div>

            <div className="navbar__resume" type="button">
              <a
                className="button"
                href={resumeLink}
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
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item} className="header__burger_link">
                    <NavLink
                      end
                      to={`/${item}`}
                      onClick={() => closeBurgerMenu()}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
              <li>
                <a
                  className="button"
                  href={resumeLink}
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
