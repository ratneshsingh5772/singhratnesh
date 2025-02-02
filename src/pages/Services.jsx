import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCode, FaMobileAlt, FaChartLine, FaCogs, FaUsers } from "react-icons/fa";
import styles from "./Services.module.css"; // Importing CSS module

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Services = () => {
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
        <header className={styles.servicesHeader}>
          <h1 className={styles.servicesTitle}>Services</h1>
        </header>

        {/* Services Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>
            My <span className={styles.primaryText}>Services</span>
          </h3>
          <div className="row text-center">
            {[
              { icon: <FaCode />, title: "Software Development", description: "Custom software solutions tailored to business needs." },
              { icon: <FaMobileAlt />, title: "App Development", description: "Native & cross-platform mobile applications." },
              { icon: <FaChartLine />, title: "Data Analytics", description: "Transform raw data into valuable insights." },
              { icon: <FaCogs />, title: "ERP Solutions", description: "Enterprise resource planning software for efficiency." },
              { icon: <FaUsers />, title: "CRM Software", description: "Customer relationship management for better engagement." },
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h5 className={styles.serviceTitle}>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Pricing Plans</h3>
          <div className="row">
            {[
              { plan: "Basic", price: "$99", features: ["Custom Development", "Basic Support", "Cloud Hosting"] },
              { plan: "Professional", price: "$199", features: ["Advanced Features", "Priority Support", "Data Analytics"] },
              { plan: "Enterprise", price: "$499", features: ["Full Customization", "24/7 Support", "Scalability"] },
            ].map((packageItem, index) => (
              <div key={index} className="col-md-4">
                <div className={styles.pricingCard}>
                  <h5>{packageItem.plan}</h5>
                  <h3>{packageItem.price}</h3>
                  <button className="btn btn-primary">Get Started</button>
                  <ul>
                    {packageItem.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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

export default Services;
