import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css"; // Import CSS Module
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar for Desktop */}
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
        <div className="container">
          {/* Logo */}
          <NavLink className={`navbar-brand fw-bold ${styles.brand}`} to="/">
            Ratnesh <span className="text-primary">Singh</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className={`collapse navbar-collapse ${styles.desktopNav}`} id="navbarNav">
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
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Sidebar Menu for Mobile */}
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
        <button className={styles.closeButton} onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className={styles.sidebarNav}>
          {[
            { name: "Home", path: "/" },
            { name: "Resume", path: "/resume" },
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `nav-link ${styles.activeLink}` : "nav-link"
                }
                to={item.path}
                onClick={closeSidebar} // Close sidebar on menu click
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
