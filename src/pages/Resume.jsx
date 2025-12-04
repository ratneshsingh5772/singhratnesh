import { useEffect, useState } from "react";
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
    // Updated container with gradient background and padding
    <div className={styles.container} style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", padding: "20px" }}>
      <div className={styles.card} style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)", borderRadius: "10px", overflow: "hidden", backgroundColor: "#fff" }}>
        <header className={styles.resumeHeader} style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
          <h1 className={styles.resumeTitle} style={{ margin: 0, fontWeight: "bold", color: "#333" }}>Resume</h1>
        </header>

        {/* Profile Summary */}
        <section className={styles.section} style={{ padding: "20px" }}>
          <h3 style={{ borderBottom: "2px solid #5477f5", display: "inline-block", paddingBottom: "5px" }}>Profile Summary</h3>
          <p>
            <strong>Co-Founder & Principal Software Engineer</strong> with over 12 years of experience in designing and developing scalable software solutions including AI-driven ERP systems, e-commerce platforms, and mobile applications using Java, React, AWS, and modern DevOps practices.
          </p>
        </section>

        {/* Work Experience */}
        <section className={styles.section} style={{ padding: "20px" }}>
          <h3 style={{ borderBottom: "2px solid #5477f5", display: "inline-block", paddingBottom: "5px" }}>Work Experience</h3>
          <div className={styles.timeline}>
            {[
              // New current job profile entry added
              {
                title: "Co-Founder & Principal Software Engineer",
                company: "Further Grow | Current",
                description: "Leading the design and development of AI-powered ERP and e-commerce solutions integrated with mobile apps, providing strategic technical architecture and mentoring development teams.",
              },
              {
                title: "Senior Software Engineer",
                company: "Boston IVLTL Solutions | Aug 2018 – Present",
                description: "Led backend architecture, designed RESTful APIs, developed microservices, optimized system performance, and mentored teams.",
              },
              {
                title: "Software Engineer",
                company: "Open Space Services Pvt Ltd. | Aug 2014 – Aug 2018",
                description: "Built dynamic Java and Spring-based e-commerce solutions, developed Magento customizations, and improved user experiences.",
              },
              {
                title: "Web Developer",
                company: "Webszol Pvt Ltd. | Jun 2013 – Jul 2014",
                description: "Developed responsive websites, applied SEO best practices, and optimized web performance.",
              },
            ].map((job, index) => (
              <div key={index} className={styles.timelineItem} style={{ marginBottom: "15px", transition: "transform 0.3s ease" , cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(10px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}>
                <h4 style={{ margin: "0 0 5px" }}>{job.title}</h4>
                <p className={styles.company} style={{ fontStyle: "italic", color: "#777" }}>{job.company}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section} style={{ padding: "20px" }}>
          <h3 style={{ borderBottom: "2px solid #5477f5", display: "inline-block", paddingBottom: "5px" }}>Key Skills</h3>
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
              "RESTful APIs",
              "MySQL",
              "MongoDB"
            ].map((skill, index) => (
              <span 
                key={index} 
                className={styles.skillBadge}
                style={{ transition: "background 0.3s ease", cursor: "pointer" }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.backgroundColor = "#5477f5"; 
                  e.currentTarget.style.color = "#fff"; 
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.backgroundColor = ""; 
                  e.currentTarget.style.color = ""; 
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className={styles.section} style={{ padding: "20px" }}>
          <h3 style={{ borderBottom: "2px solid #5477f5", display: "inline-block", paddingBottom: "5px" }}>Education</h3>
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
        <section className={styles.section} style={{ padding: "20px" }}>
          <h3 style={{ borderBottom: "2px solid #5477f5", display: "inline-block", paddingBottom: "5px" }}>Projects</h3>
          <div className={styles.timeline}>
            {[
              {
                name: "PROTA SYSTEM (ERP)",
                duration: "36 Months",
                description: "Developed ERP system including Sales Order, Purchase Orders, Inventory Management with Java, Spring Boot, AWS, Docker, and Kafka."
              },
              {
                name: "Medikabazaar (E-Commerce Platform)",
                duration: "36 Months",
                description: "Designed and developed multi-vendor e-commerce solution using React.js frontend and Spring Boot microservices backend."
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
        <section className={styles.section} style={{ padding: "20px" }}>
          <h3 style={{ borderBottom: "2px solid #5477f5", display: "inline-block", paddingBottom: "5px" }}>Certifications</h3>
          <ul className={styles.certifications}>
            {[
              "Java Basic - HackerRank",
              "SQL Intermediate - HackerRank",
              "SQL Advanced - HackerRank",
              "Software Engineer Intern - HackerRank"
            ].map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Navigation Buttons */}
        <footer className={styles.navigation} style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #eee" }}>
          <button className={styles.navBtn} onClick={handlePrev} style={{ transition: "all 0.3s ease", padding: "10px 20px", borderRadius: "5px", marginRight: "10px", background: "#5477f5", color: "#fff", border: "none", cursor: "pointer" }}>
            <FaArrowLeft /> Prev
          </button>
          <button className={styles.navBtn} onClick={handleNext} style={{ transition: "all 0.3s ease", padding: "10px 20px", borderRadius: "5px", background: "#5477f5", color: "#fff", border: "none", cursor: "pointer" }}>
            Next <FaArrowRight />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
