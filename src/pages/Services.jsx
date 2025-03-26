import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Services.css'; // Added external CSS import

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
    <div className="container my-5 services-custom-container">
      <div className="card border-primary shadow">
        <div className="card-header bg-primary text-white text-center py-4">
          <h1 className="mb-0">Services</h1>
        </div>
        <div className="card-body">
          {/* Services Section */}
          <div className="mb-5 p-4 bg-light rounded shadow-sm">
            <h3 className="mb-3">My <span className="text-primary fw-bold">Services</span></h3>
            <div>
              <h2 className="mb-3 display-6">EASY ERP – Integrated AI-powered ERP, E-commerce, Mobile App</h2>
              <h4 className="text-secondary">Overview</h4>
              <p className="lead">
                EASY ERP is an integrated business solution combining ERP, E-commerce, and mobile app capabilities designed for streamlined inventory, sales, and financial tracking. Leveraging AI, it delivers efficient inventory management, accurate financial insights, and improved profitability.
              </p>
              <h4 className="text-secondary mt-4">Key Features</h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">
                  <strong>Efficient Inventory Management:</strong>
                  <ul>
                    <li>Real-time Inventory Tracking: Monitor stock levels and movements instantly.</li>
                    <li>AI-driven Non-Movable Stock Identification: Identify slow or stationary inventory effortlessly.</li>
                  </ul>
                </li>
                <li className="list-group-item">
                  <strong>Integrated E-commerce Platform:</strong>
                  <ul>
                    <li>Unified online storefront with synchronized stock, pricing, and orders.</li>
                    <li>Simplified sales processes optimized for ease-of-use and scalability.</li>
                  </ul>
                </li>
                <li className="list-group-item">
                  <strong>Mobile Accessibility:</strong>
                  <ul>
                    <li>Intuitive mobile app for managing sales, inventory, and finances anytime.</li>
                    <li>Real-time notifications for low stock alerts and order tracking.</li>
                  </ul>
                </li>
                <li className="list-group-item">
                  <strong>Financial Insights & Tracking:</strong>
                  <ul>
                    <li>Profit & Loss Tracking: Immediate visibility across products and sales channels.</li>
                    <li>Payables & Receivables Management: Seamless management of financial flows.</li>
                  </ul>
                </li>
                <li className="list-group-item">
                  <strong>AI-Powered Forecasting:</strong>
                  <p className="mb-0">Predictive analytics to optimize procurement, minimize waste, and anticipate market demand.</p>
                </li>
              </ul>
              <h4 className="text-secondary mt-4">Benefits of EASY ERP</h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">Seamless Integration of ERP, E-commerce, and the App</li>
                <li className="list-group-item">Cost Reduction through AI-driven insights</li>
                <li className="list-group-item">Scalable & Flexible solutions tailored for growth</li>
                <li className="list-group-item">Increased Profitability via real-time financial tracking</li>
              </ul>
              <h4 className="text-secondary mt-4">Who Should Use EASY ERP?</h4>
              <p>
                Ideal for small to medium enterprises seeking quick implementation and immediate ROI, or businesses wanting comprehensive integration of inventory, sales, and financial tracking.
              </p>
              <h4 className="text-secondary mt-4">Summary of Advantages</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">✅ Easy, AI-driven stock and inventory management</li>
                <li className="list-group-item">✅ Integrated, user-friendly e-commerce</li>
                <li className="list-group-item">✅ Comprehensive mobile application for ease of access</li>
                <li className="list-group-item">✅ Real-time financial monitoring and profit-loss insights</li>
                <li className="list-group-item">✅ Effective management of payable and receivable accounts</li>
              </ul>
              <p className="mt-3 fw-bold">
                EASY ERP simplifies your business processes, empowering data-driven decisions and sustainable growth.
              </p>
            </div>
          </div>
          
          {/* Pricing Section */}
          <div className="mb-5 p-4 bg-light rounded shadow-sm">
            <h3 className="mb-3">Pricing Plans</h3>
            <div>
              <p className="lead">
                Choose a plan tailored to your needs. Our transparent pricing offers optimal value with no hidden costs.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Basic ERP Package</li>
                <li className="list-group-item">Advanced E-commerce Suite</li>
                <li className="list-group-item">Complete Mobile & ERP Integration</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-outline-primary" onClick={handlePrev}>
            <FaArrowLeft /> Prev
          </button>
          <button className="btn btn-outline-primary" onClick={handleNext}>
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
