import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // Import the updated CSS with container queries
import CTAButton from "./buttons/CTAButton";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import TextHeart from "../icons/TextHeart";
const NavLink = ({ to, label, closeMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to; // Check if the route is active
  return (
    <li
      style={{ listStyle: "none" }}
      className={`nav-item ${isActive ? "active" : ""}`}
    >
      <Link
        to={to}
        onClick={closeMenu}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
};
export const Navlist = ({ closeMenu, isOpen, wrap }) => {
  return (
    <ul className={`nav-list ${isOpen ? "open" : ""} ${wrap ? "wrap" : ""}`}>
      <NavLink to="/" label="Home" closeMenu={closeMenu} />
      <NavLink to="/about-us" label="About us" closeMenu={closeMenu} />
      <NavLink to="/services" label="Services" closeMenu={closeMenu} />
      <NavLink to="/portfolio" label="Portfolio" closeMenu={closeMenu} />
      <NavLink to="/contact" label="Contact" closeMenu={closeMenu} />
    </ul>
  );
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-brand">
          Raj
          <TextHeart styles={{ fontSize: ".75em" }} />i
        </h1>
        <div className={`nav ${isOpen ? "open" : ""}`}>
          <button className="btn" onClick={closeMenu}>
            <Close />
          </button>
          <Navlist closeMenu={closeMenu} isOpen={isOpen} wrap={true} />
        </div>
        <div className="navbar-actions">
          <div className="navbar-cta">
            <CTAButton
              title={"Get Started"}
              onClick={() => navigate("/contact")}
            />
          </div>
          <div className="navbar-header">
            <button
              className={`menu-toggle ${isOpen ? "open" : ""} btn`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <Hamburger />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
