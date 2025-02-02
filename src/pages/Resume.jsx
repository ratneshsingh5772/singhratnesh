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
            With over <strong>12 years</strong> of experience as a <strong>Principal Software Engineer</strong>, 
            I specialize in designing and developing <strong>scalable web applications, client-server systems, 
            and database solutions</strong>. I have expertise in full-stack development, 
            cloud computing, DevOps, and modern JavaScript frameworks.
          </p>
        </section>

        {/* Work Experience */}
        <section className={styles.section}>
          <h3>Work Experience</h3>
          <div className={styles.timeline}>
            {[
              {
                title: "Senior Software Engineer",
                company: "Boston IVLTL Solutions | Aug 2018 - Present",
                description:
                  "Leading backend development, API design, Microservices, system optimization, and mentoring junior developers.",
              },
              {
                title: "Software Engineer",
                company: "Open Space Services Pvt Ltd. | Aug 2014 - Aug 2018",
                description:
                  "Developed dynamic e-commerce websites in JAVA, SPRING, implemented custom modules for Magento, and optimized UI/UX.",
              },
              {
                title: "Web Developer",
                company: "Webszol Pvt Ltd. | Jun 2013 - Jul 2014",
                description:
                  "Designed and maintained websites, implemented SEO best practices, and optimized performance.",
              },
            ].map((job, index) => (
              <div key={index} className={styles.timelineItem}>
                <h4>{job.title}</h4>
                <p className={styles.company}>{job.company}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h3>Key Skills</h3>
          <div className={styles.skillsGrid}>
            {[
              "Java",
              "Spring Boot",
              "React.js",
              "Next.js",
              "AWS",
              "Docker",
              "CI/CD",
              "Microservices",
              "Kafka",
              "JUnit",
              "Spring Security",
              "DevOps",
            ].map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h3>Education</h3>
          <div className={styles.timeline}>
            {[
              { degree: "B.Tech in Computer Science", institute: "GBTU | 2012 | Grade: 70%" },
              { degree: "12th (Science Stream)", institute: "Uttar Pradesh Board | 2008" },
              { degree: "10th", institute: "Uttar Pradesh Board | 2006" },
            ].map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <h4>{edu.degree}</h4>
                <p className={styles.company}>{edu.institute}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className={styles.section}>
          <h3>Projects</h3>
          <div className={styles.timeline}>
            {[
              {
                name: "PROTA SYSTEM",
                duration: "36 Months",
                description:
                  "Developed modules for Sales Order Management, Shipment Tracking, Purchase Orders, and Inventory Management. Integrated Kafka for messaging, AWS for cloud hosting, and Docker for containerization.",
              },
              {
                name: "Medikabazaar",
                duration: "36 Months",
                description:
                  "Built a multi-vendor e-commerce platform with React.js frontend, Spring Boot backend, and microservices architecture.",
              },
            ].map((project, index) => (
              <div key={index} className={styles.timelineItem}>
                <h4>{project.name}</h4>
                <p className={styles.company}>Duration: {project.duration}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className={styles.section}>
          <h3>Certifications</h3>
          <ul className={styles.certifications}>
            {[
              "Java Basic - HackerRank",
              "SQL (Intermediate) - HackerRank",
              "SQL (Advanced) - HackerRank",
              "Software Engineer Intern - HackerRank",
            ].map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
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
