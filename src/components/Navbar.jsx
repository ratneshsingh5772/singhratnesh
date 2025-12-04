import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaFileAlt, FaBriefcase, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
    { name: "Services", path: "/services", icon: <FaBriefcase /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaFolderOpen /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-lg backdrop-blur-lg bg-opacity-95" 
            : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <NavLink 
              className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-gray-900 hover:scale-105 transition-transform"
              to="/"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-md">
                RS
              </div>
              <span className="hidden sm:inline">
                Ratnesh <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Singh</span>
              </span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  to={item.path}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="hidden lg:inline">{item.name}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-all active:scale-95"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                RS
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Ratnesh Singh</p>
                <p className="text-xs text-gray-600">Menu</p>
              </div>
            </div>
            <button 
              className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-md rounded-lg transition-all active:scale-95"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                          : "text-gray-700 hover:bg-white hover:shadow-md active:scale-95"
                      }`
                    }
                    to={item.path}
                    onClick={closeSidebar}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200 bg-white bg-opacity-50">
            <p className="text-xs text-gray-600 text-center">
              © 2025 Ratnesh Singh
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300 w-full h-full border-0 p-0 cursor-default"
          onClick={closeSidebar}
          aria-label="Close menu overlay"
        />
      )}
    </>
  );
};

export default Navbar;
