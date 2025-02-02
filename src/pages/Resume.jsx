import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Resume.module.css"; // Importing CSS module

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Resume = () => {
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
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.resumeTitle}>Resume</h1>
        </header>

        {/* Profile Summary */}
        <section className={styles.section}>
          <h3>Profile Summary</h3>
          <p>
            With over <strong>12 years</strong> of experience as a <strong>Principle Software Engineer</strong>, 
            I specialize in designing and developing <strong>scalable web applications, client-server systems, 
            and database solutions</strong>. I have expertise in full-stack development, 
            cloud computing, DevOps, and modern JavaScript frameworks.
          </p>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <h3>Work Experience</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h4>Senior Software Engineer</h4>
              <p className={styles.company}>Boston IVLTL Solutions | Aug 2018 - Present</p>
              <p>Leading backend development, API design,Microservices, system optimization, and mentoring junior developers.</p>
            </div>
            <div className={styles.timelineItem}>
              <h4>Software Engineer</h4>
              <p className={styles.company}>Open Space Services Pvt Ltd. | Aug 2014 - Aug 2018</p>
              <p>Developed dynamic e-commerce websites in JAVA,SPRING, implemented custom modules for Magento, and optimized UI/UX.</p>
            </div>
            <div className={styles.timelineItem}>
              <h4>Web Developer</h4>
              <p className={styles.company}>Webszol Pvt Ltd. | Jun 2013 - Jul 2014</p>
              <p>Designed and maintained websites, implemented SEO best practices, and optimized performance.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h3>Key Skills</h3>
          <div className={styles.skillsGrid}>
            {["Java", "Spring Boot", "React.js", "Next.js", "AWS", "Docker", "CI/CD", "Microservices", "Kafka", "JUnit", "Spring Security", "DevOps"].map((skill, index) => (
              <span key={index} className={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h3>Education</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h4>B.Tech in Computer Science</h4>
              <p className={styles.company}>GBTU | 2012 | Grade: 70%</p>
            </div>
            <div className={styles.timelineItem}>
              <h4>12th (Science Stream)</h4>
              <p className={styles.company}>Uttar Pradesh Board | 2008</p>
            </div>
            <div className={styles.timelineItem}>
              <h4>10th</h4>
              <p className={styles.company}>Uttar Pradesh Board | 2006</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={styles.section}>
          <h3>Projects</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h4>PROTA SYSTEM</h4>
              <p className={styles.company}>Duration: 36 Months</p>
              <p>
                Developed modules for Sales Order Management, Shipment Tracking, Purchase Orders, and Inventory 
                Management. Integrated Kafka for messaging, AWS for cloud hosting, and Docker for containerization.
              </p>
            </div>
            <div className={styles.timelineItem}>
              <h4>Medikabazaar</h4>
              <p className={styles.company}>Duration: 36 Months</p>
              <p>
                Built a multi-vendor e-commerce platform with React.js frontend, Spring Boot backend, and microservices architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className={styles.section}>
          <h3>Certifications</h3>
          <ul className={styles.certifications}>
            <li>Java Basic - HackerRank</li>
            <li>SQL (Intermediate) - HackerRank</li>
            <li>SQL (Advanced) - HackerRank</li>
            <li>Software Engineer Intern - HackerRank</li>
          </ul>
        </section>

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

export default Resume;
