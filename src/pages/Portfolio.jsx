import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container-fluid" style={{ background: "linear-gradient(135deg, #b3c6ff, #c2d1ff)", padding: "3rem 1rem", minHeight: "100vh" }}>
      <div className="card" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.3)", borderRadius: "20px", overflow: "hidden", border: "none" }}>
        <header className="text-white text-center py-5" style={{ background: "linear-gradient(135deg, #576CBC, #8e97ff)", boxShadow: "inset 0 0 15px rgba(0,0,0,0.4)" }}>
          <h1 style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.6)", fontSize: "2.8rem", fontWeight: "bold" }}>Portfolio</h1>
        </header>

        {/* Category Filters */}
        <section className="p-4 text-center">
          {categories.map((category) => (
            <button 
              key={category}
              className={`btn mx-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
              style={{ padding: "12px 25px", borderRadius: "50px", fontWeight: "700", transition: "all 0.3s", letterSpacing: "1px" }}
              onClick={() => setSelectedCategory(category)}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Portfolio Grid */}
        <section className="row p-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 border-0" 
                style={{ 
                  borderRadius: "20px", 
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)", 
                  transition: "all 0.3s", 
                  background: "linear-gradient(135deg, #ffffff, #e6e6ff)" 
                }}
                onMouseOver={e => e.currentTarget.style.transform = "translateY(-10px)"}
                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div className="card-body" style={{ background: "transparent", textAlign: "center" }}>
                  <h5 className="card-title" style={{ fontWeight: "700", fontSize: "1.5rem", color: "#333" }}>{item.title}</h5>
                  <p className="card-text" style={{ fontSize: "1rem", color: "#555" }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Navigation Buttons */}
        <footer className="d-flex justify-content-between p-4" style={{ background: "#eef2ff" }}>
          <button className="btn btn-outline-primary" onClick={handlePrev} style={{ fontWeight: "700", padding: "10px 20px" }}>
            <FaArrowLeft /> Prev
          </button>
          <button className="btn btn-outline-primary" onClick={handleNext} style={{ fontWeight: "700", padding: "10px 20px" }}>
            Next <FaArrowRight />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
