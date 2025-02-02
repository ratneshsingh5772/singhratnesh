import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css"; // Import CSS Module

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <NavLink className={`navbar-brand fw-bold ${styles.brand}`} to="/">
          Ratnesh <span className="text-primary">Singh</span>
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { name: "Home", path: "/" },
              { name: "Resume", path: "/resume" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `nav-link ${styles.activeLink}` : "nav-link"
                  }
                  to={item.path}
                  aria-current={item.path === window.location.pathname ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
