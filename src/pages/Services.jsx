import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    <div className="container mx-auto my-20 px-4 max-w-6xl">
      <div className="border-2 border-blue-500 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-6">
          <h1 className="text-4xl font-bold mb-0">Services</h1>
        </div>
        <div className="p-6">
          {/* Services Section */}
          <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-4">My <span className="text-blue-500 font-bold">Services</span></h3>
            <div>
              <h2 className="mb-4 text-3xl font-semibold">EASY ERP – Integrated AI-powered ERP, E-commerce, Mobile App</h2>
              <h4 className="text-gray-600 text-xl font-semibold">Overview</h4>
              <p className="text-lg mb-4">
                EASY ERP is an integrated business solution combining ERP, E-commerce, and mobile app capabilities designed for streamlined inventory, sales, and financial tracking. Leveraging AI, it delivers efficient inventory management, accurate financial insights, and improved profitability.
              </p>
              <h4 className="text-gray-600 text-xl font-semibold mt-6">Key Features</h4>
              <ul className="space-y-3 mb-4">
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <strong>Efficient Inventory Management:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Real-time Inventory Tracking: Monitor stock levels and movements instantly.</li>
                    <li>AI-driven Non-Movable Stock Identification: Identify slow or stationary inventory effortlessly.</li>
                  </ul>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <strong>Integrated E-commerce Platform:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Unified online storefront with synchronized stock, pricing, and orders.</li>
                    <li>Simplified sales processes optimized for ease-of-use and scalability.</li>
                  </ul>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <strong>Mobile Accessibility:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Intuitive mobile app for managing sales, inventory, and finances anytime.</li>
                    <li>Real-time notifications for low stock alerts and order tracking.</li>
                  </ul>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <strong>Financial Insights & Tracking:</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Profit & Loss Tracking: Immediate visibility across products and sales channels.</li>
                    <li>Payables & Receivables Management: Seamless management of financial flows.</li>
                  </ul>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm">
                  <strong>AI-Powered Forecasting:</strong>
                  <p className="mt-2 mb-0">Predictive analytics to optimize procurement, minimize waste, and anticipate market demand.</p>
                </li>
              </ul>
              <h4 className="text-gray-600 text-xl font-semibold mt-6">Benefits of EASY ERP</h4>
              <ul className="space-y-2 mb-4">
                <li className="bg-white p-3 rounded-lg shadow-sm">Seamless Integration of ERP, E-commerce, and the App</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">Cost Reduction through AI-driven insights</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">Scalable & Flexible solutions tailored for growth</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">Increased Profitability via real-time financial tracking</li>
              </ul>
              <h4 className="text-gray-600 text-xl font-semibold mt-6">Who Should Use EASY ERP?</h4>
              <p className="mb-4">
                Ideal for small to medium enterprises seeking quick implementation and immediate ROI, or businesses wanting comprehensive integration of inventory, sales, and financial tracking.
              </p>
              <h4 className="text-gray-600 text-xl font-semibold mt-6">Summary of Advantages</h4>
              <ul className="space-y-2 mb-4">
                <li className="bg-white p-3 rounded-lg shadow-sm">✅ Easy, AI-driven stock and inventory management</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">✅ Integrated, user-friendly e-commerce</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">✅ Comprehensive mobile application for ease of access</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">✅ Real-time financial monitoring and profit-loss insights</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">✅ Effective management of payable and receivable accounts</li>
              </ul>
              <p className="mt-4 font-bold text-lg">
                EASY ERP simplifies your business processes, empowering data-driven decisions and sustainable growth.
              </p>
            </div>
          </div>
          
          {/* Pricing Section */}
          <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-4">Pricing Plans</h3>
            <div>
              <p className="text-lg mb-4">
                Choose a plan tailored to your needs. Our transparent pricing offers optimal value with no hidden costs.
              </p>
              <ul className="space-y-2">
                <li className="bg-white p-3 rounded-lg shadow-sm">Basic ERP Package</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">Advanced E-commerce Suite</li>
                <li className="bg-white p-3 rounded-lg shadow-sm">Complete Mobile & ERP Integration</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 flex justify-between border-t">
          <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2" onClick={handlePrev}>
            <FaArrowLeft /> Prev
          </button>
          <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2" onClick={handleNext}>
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
