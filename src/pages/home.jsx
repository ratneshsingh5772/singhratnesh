import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaCode, FaLaptopCode, FaDatabase, FaCloud, FaBug, FaShieldAlt } from "react-icons/fa";
import styles from "./Home.module.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = menuItems.findIndex((item) => item.path === location.pathname);
    if (index !== -1) setCurrentIndex(index);
  }, [location.pathname]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % menuItems.length;
    setCurrentIndex(nextIndex);
    navigate(menuItems[nextIndex].path);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    setCurrentIndex(prevIndex);
    navigate(menuItems[prevIndex].path);
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={`card ${styles.card}`}>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.profileIcon}>RS</div>
          <h1 className={styles.name}>Ratnesh Singh</h1>
          <p className={styles.title}>Principal Software Engineer</p>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </header>

        {/* Content Section */}
        <main className={styles.content}>
          {/* About Section */}
          <section className={styles.section}>
            <h3>
              About <span className={styles.primaryText}>Me</span>
            </h3>
            <p>
              Hello! I'm Ratnesh Singh, a passionate software engineer with expertise in modern web
              development. I love solving problems and building scalable applications that make a
              difference.
            </p>
            <button className={styles.downloadBtn}>Download Resume</button>
          </section>

          {/* Contact Info */}
          <section className={styles.section}>
            <div className={styles.contactInfo}>
              <div className={styles.contactColumn}>
                <p>
                  <strong>Age:</strong> 34
                </p>
                <p>
                  <strong>Residence:</strong> India
                </p>
                <p>
                  <strong>Address:</strong> Mumbai,Maharashtra,India,401209
                </p>
              </div>
              <div className={styles.contactColumn}>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:email@example.com">ratnesh.sheatvns@gmail.com</a>
                </p>
                <p>
                  <strong>Phone:</strong>(+91) 9022835872
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience & Expertise */}
          <section className={styles.section}>
            <h3>
              Professional Experience & <span className={styles.primaryText}>Expertise</span>
            </h3>
            <p>
              With over 12 years of professional experience as a Lead and Senior Full-Stack Developer,
              I specialize in designing and developing scalable web-based, client-server, and mobile
              applications, as well as database solutions. My expertise spans across a wide range of modern
              technologies and frameworks, enabling me to deliver robust and efficient software solutions.
            </p>
            <div className={styles.techList}>
  {[
    {
      icon: <FaLaptopCode />,
      title: "Backend Technologies",
      description: "Java, Spring Boot, JPA, Hibernate, RESTful & SOAP web services, XML, WSDL, SOA, PHP, Laravel, Magento",
    },
    {
      icon: <FaCode />,
      title: "Frontend Technologies",
      description: "React.js, Next.js, JavaScript, jQuery, Ajax, HTML, CSS, TypeScript, MVC frameworks like Next.js",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "MySQL, MongoDB, PostgreSQL",
    },
    {
      icon: <FaCloud />,
      title: "DevOps & Cloud",
      description: "AWS, Docker, CI/CD using Jenkins",
    },
    {
      icon: <FaBug />,
      title: "Testing",
      description: "JUnit for unit and integration testing",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description: "Spring Security, JWT Authentication",
    },
  ].map((tech, index) => (
    <div key={index} className={styles.techSection}>
      <div className={styles.techIcon}>{tech.icon}</div>
      <h5>{tech.title}</h5>
      <p>{tech.description}</p>
    </div>
  ))}
</div>


          </section>
        </main>

        {/* Navigation Buttons */}
        <footer className={styles.navigation}>
          <button className={styles.navBtn} onClick={handlePrev}>
            <FaArrowLeft /> Prev
          </button>
          <button className={styles.navBtn} onClick={handleNext}>
            Next <FaArrowRight />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Home;
