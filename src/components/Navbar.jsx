import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS Module
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll

  // New effect to track scrolling and add "scrolled" class
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar for Desktop */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* Logo */}
          <NavLink className={styles.brand} to="/">
            Ratnesh <span className={styles.brandAccent}>Singh</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className={styles.desktopNav}>
            <ul className={styles.navList}>
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
                      isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
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
                  isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
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
