import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaBug,
  FaShieldAlt,
  FaDownload,
} from "react-icons/fa";
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
    <>
      {/* Added keyframes for animated gradient */}
      <style>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <div className={`container ${styles.container}`} style={{
        background: "linear-gradient(135deg, #f6d365, #fda085)",
        animation: "gradientBackground 15s ease infinite",
        backgroundSize: "400% 400%",
        padding: "20px"
      }}>
        <div className={`card ${styles.card}`} style={{
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.3)",
          transition: "box-shadow 0.3s ease"
        }}>
          {/* Header Section */}
          <header className={styles.header}>
            <div className={styles.profileIcon}>RS</div>
            <h1 className={styles.name} style={{
              background: "linear-gradient(90deg, #ff8a00, #e52e71)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}>
              Ratnesh Singh
            </h1>
            <div className={styles.socialIcons}>
              <a 
                href="https://x.com/ratneshshingh" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#fff", transition: "color 0.3s ease" }}
                onMouseEnter={(e)=> e.currentTarget.style.color="#ffd700"}
                onMouseLeave={(e)=> e.currentTarget.style.color="#fff"}
              >
                <FaTwitter />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#fff", transition: "color 0.3s ease", margin: "0 5px" }}
                onMouseEnter={(e)=> e.currentTarget.style.color="#ffd700"}
                onMouseLeave={(e)=> e.currentTarget.style.color="#fff"}
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#fff", transition: "color 0.3s ease", margin: "0 5px" }}
                onMouseEnter={(e)=> e.currentTarget.style.color="#ffd700"}
                onMouseLeave={(e)=> e.currentTarget.style.color="#fff"}
              >
                <FaInstagram />
              </a>
              <a 
                href="www.linkedin.com/in/ratnesh-singh-724bb22b" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#fff", transition: "color 0.3s ease", margin: "0 5px" }}
                onMouseEnter={(e)=> e.currentTarget.style.color="#ffd700"}
                onMouseLeave={(e)=> e.currentTarget.style.color="#fff"}
              >
                <FaLinkedin />
              </a>
            </div>
          </header>

          {/* Main Content Section */}
          <main className={styles.content}>
            {/* About Section */}
            <section className={styles.section}>
              <h3>
                About <span className={styles.primaryText}>Me</span>
              </h3>
              <p>
                Hi! I'm <strong>Ratnesh Singh</strong>, a Co-Founder and Principal Software Engineer with over 12 years of expertise in designing and developing AI-driven ERP solutions, E-commerce platforms, and scalable web and mobile applications using Java, Spring Boot, React, and AWS.
              </p>
              <button 
                className={styles.downloadBtn} 
                style={{ background: "#5477f5", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", transition: "transform 0.3s ease, background 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <FaDownload /> Download Resume
              </button>
            </section>

            {/* Contact Information */}
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
                    <strong>Address:</strong> Mumbai, Maharashtra, 401209
                  </p>
                </div>
                <div className={styles.contactColumn}>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:ratnesh.sheatvns@gmail.com">
                      ratnesh.sheatvns@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong> (+91) 9450903029
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
                Expertise & <span className={styles.primaryText}>Skills</span>
              </h3>
              <p>
                Specializing in developing AI-based ERP platforms, integrated e-commerce solutions, and applications, ensuring top performance, scalability, and robust security.
              </p>
              <div className={styles.techList}>
                {[
                  {
                    icon: <FaLaptopCode />,
                    title: "Backend Technologies",
                    description:
                      "Java, Spring Boot, Microservices, REST APIs, JPA, Hibernate, PHP, Laravel",
                  },
                  {
                    icon: <FaCode />,
                    title: "Frontend Technologies",
                    description:
                      "React.js, Next.js, JavaScript, TypeScript, HTML, CSS",
                  },
                  {
                    icon: <FaDatabase />,
                    title: "Databases",
                    description: "MySQL, MongoDB, PostgreSQL",
                  },
                  {
                    icon: <FaCloud />,
                    title: "Cloud & DevOps",
                    description: "AWS, Docker, Kubernetes, CI/CD with Jenkins",
                  },
                  {
                    icon: <FaBug />,
                    title: "Testing",
                    description: "JUnit, Integration Testing, Mockito",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Security",
                    description: "Spring Security, JWT, OAuth 2.0",
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
            <button 
              className={styles.navBtn} 
              onClick={handlePrev} 
              style={{ transition: "transform 0.3s ease", padding: "10px 20px", borderRadius: "5px" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaArrowLeft /> Prev
            </button>
            <button 
              className={styles.navBtn} 
              onClick={handleNext} 
              style={{ transition: "transform 0.3s ease", padding: "10px 20px", borderRadius: "5px" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Next <FaArrowRight />
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
