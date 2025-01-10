import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css"; // Import the updated CSS with container queries
import CTAButton from "./CTAButton";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";

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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-brand">Rajvi</h1>
        <div className={`nav ${isOpen ? "open" : ""}`}>
          <button className="btn" onClick={closeMenu}>
            <Close />
          </button>
          <ul className={`nav-list ${isOpen ? "open" : ""}`}>
            <NavLink to="/" label="Home" closeMenu={closeMenu} />
            <NavLink to="/about-us" label="About us" closeMenu={closeMenu} />
            <NavLink to="/services" label="Services" closeMenu={closeMenu} />
            <NavLink to="/portfolio" label="Portfolio" closeMenu={closeMenu} />
            <NavLink to="/contact" label="Contact" closeMenu={closeMenu} />
          </ul>
        </div>
        <div className="navbar-actions">
          <div className="navbar-cta">
            <CTAButton />
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
