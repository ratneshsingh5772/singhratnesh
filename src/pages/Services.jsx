import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaRocket, 
  FaShoppingCart, 
  FaMobileAlt, 
  FaChartLine, 
  FaRobot,
  FaCheckCircle,
  FaDollarSign
} from "react-icons/fa";
import PageSEO from "../components/SEO/PageSEO";
import StructuredData from "../components/SEO/StructuredData";
import { PAGE_SEO } from "../config/seoConfig";
import { generateWebPageSchema, generateSoftwareSchema, generateBreadcrumbSchema } from "../utils/schemaGenerators";

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

  // SEO structured data
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" }
  ];
  const schemas = [
    generateSoftwareSchema(),
    generateWebPageSchema({
      title: PAGE_SEO.services.title,
      description: PAGE_SEO.services.description,
      url: `https://ratneshsingh.com${PAGE_SEO.services.path}`,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <PageSEO
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        keywords={PAGE_SEO.services.keywords}
        path={PAGE_SEO.services.path}
        image={PAGE_SEO.services.image}
      />

      {/* Structured Data */}
      <StructuredData data={schemas} />

      <div className="min-h-screen pt-16 sm:pt-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 max-w-6xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          
          {/* Header */}
          <header className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center py-12 sm:py-16 border-b border-gray-100">
            <div className="px-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4 sm:mb-6 text-white text-2xl sm:text-3xl shadow-lg animate-pulse">
                <FaRocket />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 text-gray-900">My Services</h1>
              <p className="text-base sm:text-lg text-gray-600">Comprehensive Business Solutions for Growth</p>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
            
            {/* Service Overview */}
            <section className="mb-10 sm:mb-16 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-blue-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 text-gray-900">
                  EASY ERP – Integrated AI-powered Solution
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                  EASY ERP is an integrated business solution combining <strong className="text-gray-900">ERP</strong>, <strong className="text-gray-900">E-commerce</strong>, and <strong className="text-gray-900">Mobile App</strong> capabilities designed for streamlined inventory, sales, and financial tracking. Leveraging AI, it delivers efficient inventory management, accurate financial insights, and improved profitability.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-10 sm:mb-16 max-w-5xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Key Features</span>
                <span className="text-2xl sm:text-3xl">✨</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: <FaChartLine />,
                    title: "Efficient Inventory Management",
                    color: "from-blue-500 to-cyan-500",
                    points: [
                      "Real-time Inventory Tracking: Monitor stock levels and movements instantly",
                      "AI-driven Non-Movable Stock Identification: Identify slow or stationary inventory effortlessly"
                    ]
                  },
                  {
                    icon: <FaShoppingCart />,
                    title: "Integrated E-commerce Platform",
                    color: "from-purple-500 to-pink-500",
                    points: [
                      "Unified online storefront with synchronized stock, pricing, and orders",
                      "Simplified sales processes optimized for ease-of-use and scalability"
                    ]
                  },
                  {
                    icon: <FaMobileAlt />,
                    title: "Mobile Accessibility",
                    color: "from-green-500 to-emerald-500",
                    points: [
                      "Intuitive mobile app for managing sales, inventory, and finances anytime",
                      "Real-time notifications for low stock alerts and order tracking"
                    ]
                  },
                  {
                    icon: <FaDollarSign />,
                    title: "Financial Insights & Tracking",
                    color: "from-orange-500 to-red-500",
                    points: [
                      "Profit & Loss Tracking: Immediate visibility across products and sales channels",
                      "Payables & Receivables Management: Seamless management of financial flows"
                    ]
                  },
                  {
                    icon: <FaRobot />,
                    title: "AI-Powered Forecasting",
                    color: "from-indigo-500 to-purple-500",
                    points: [
                      "Predictive analytics to optimize procurement and minimize waste",
                      "Anticipate market demand with intelligent data-driven insights"
                    ]
                  },
                ].map((feature) => (
                  <div 
                    key={feature.title} 
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-200 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex w-12 h-12 bg-gradient-to-r ${feature.color} text-white rounded-xl items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-all duration-200`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                        <ul className="space-y-2">
                          {feature.points.map((point) => (
                            <li key={point.substring(0, 30)} className="text-xs sm:text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-10 sm:mb-16 max-w-5xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Benefits of EASY ERP</span>
                <span className="text-2xl sm:text-3xl">🎯</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Seamless Integration of ERP, E-commerce, and the App",
                  "Cost Reduction through AI-driven insights",
                  "Scalable & Flexible solutions tailored for growth",
                  "Increased Profitability via real-time financial tracking",
                  "Easy, AI-driven stock and inventory management",
                  "Integrated, user-friendly e-commerce",
                  "Comprehensive mobile application for ease of access",
                  "Real-time financial monitoring and profit-loss insights",
                ].map((benefit) => (
                  <div 
                    key={benefit} 
                    className="flex items-center gap-3 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-green-100"
                  >
                    <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Who Should Use */}
            <section className="mb-10 sm:mb-16 max-w-5xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Who Should Use EASY ERP?</span>
                <span className="text-2xl sm:text-3xl">👥</span>
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-purple-100">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Ideal for <strong className="text-gray-900">small to medium enterprises</strong> seeking quick implementation and immediate ROI, or businesses wanting comprehensive integration of inventory, sales, and financial tracking. Perfect for companies looking to leverage AI-powered insights for data-driven decisions and sustainable growth.
                </p>
              </div>
            </section>

            {/* Pricing */}
            <section className="mb-10 sm:mb-16 max-w-5xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Pricing Plans</span>
                <span className="text-2xl sm:text-3xl">💰</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Choose a plan tailored to your needs. Our transparent pricing offers optimal value with no hidden costs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    name: "Basic ERP Package",
                    color: "from-blue-500 to-cyan-500",
                    icon: <FaChartLine />
                  },
                  {
                    name: "Advanced E-commerce Suite",
                    color: "from-purple-500 to-pink-500",
                    icon: <FaShoppingCart />
                  },
                  {
                    name: "Complete Mobile & ERP Integration",
                    color: "from-green-500 to-emerald-500",
                    icon: <FaMobileAlt />
                  },
                ].map((plan) => (
                  <div 
                    key={plan.name} 
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-200 border-2 border-gray-100 hover:border-blue-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${plan.color} text-white rounded-xl flex items-center justify-center mb-4 shadow-md text-2xl group-hover:scale-110 transition-all duration-200`}>
                      {plan.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">{plan.name}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-10 text-center shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-base sm:text-lg text-blue-100 mb-6">
                  EASY ERP simplifies your business processes, empowering data-driven decisions and sustainable growth.
                </p>
                <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200">
                  Get Started Today
                </button>
              </div>
            </section>

          </main>

          {/* Navigation Buttons */}
          <footer className="bg-gradient-to-r from-gray-50 to-blue-50 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center border-t-2 border-gray-200 gap-3">
            <button 
              className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-blue-500 text-blue-600 font-medium rounded-xl hover:bg-blue-50 active:scale-95 transition-all text-sm sm:text-base group shadow-sm"
              onClick={handlePrev}
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-lg" /> 
              <span className="font-semibold">Prev</span>
            </button>
            <button 
              className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all text-sm sm:text-base group shadow-lg"
              onClick={handleNext}
            >
              <span className="font-semibold">Next</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-lg" />
            </button>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
