import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaCog } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Portfolio.module.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const categories = ["All", "Web Development", "App Development", "Cloud Solutions", "Data Analytics"];

const portfolioItems = [
  { id: 1, image: "https://source.unsplash.com/400x300/?code", category: "Web Development", title: "E-commerce Platform", description: "Built with React.js & Spring Boot" },
  { id: 2, image: "https://source.unsplash.com/400x300/?mobile", category: "App Development", title: "Healthcare App", description: "Android & iOS App with Flutter" },
  { id: 3, image: "https://source.unsplash.com/400x300/?database", category: "Data Analytics", title: "Big Data Processing", description: "Apache Kafka & Spark for data pipelines" },
  { id: 4, image: "https://source.unsplash.com/400x300/?server", category: "Cloud Solutions", title: "AWS Cloud Infrastructure", description: "Automated CI/CD & AWS Lambda" },
  { id: 5, image: "https://source.unsplash.com/400x300/?dashboard", category: "Web Development", title: "Admin Dashboard", description: "React.js & Tailwind CSS UI" },
  { id: 6, image: "https://source.unsplash.com/400x300/?ai", category: "Data Analytics", title: "AI-Powered Insights", description: "Machine learning & NLP models" },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Header Section */}
        <header className={styles.portfolioHeader}>
          <h1 className={styles.portfolioTitle}>Portfolio</h1>
        </header>

        {/* Category Filters */}
        <section className="p-3 text-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn mx-2 ${selectedCategory === category ? "btn-primary" : "btn-light"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Portfolio Grid */}
        <section className="row p-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6">
              <div className={styles.portfolioItem}>
                <img src={item.image} alt={item.title} className={styles.portfolioImage} />
                <div className={styles.portfolioOverlay}>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
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

export default Portfolio;
