import { useContext } from "react";
import Headroom from "react-headroom";

import "./Navbar.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { greeting } from "../../profile";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo link">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label
          htmlFor="menu-btn"
          className="menu-icon"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="#">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};
