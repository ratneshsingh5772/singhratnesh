import { useEffect, useState } from "react";
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
import PageSEO from "../components/SEO/PageSEO";
import StructuredData from "../components/SEO/StructuredData";
import { PAGE_SEO } from "../config/seoConfig";
import { generateWebSiteSchema, generatePersonSchema, generateWebPageSchema, generateBreadcrumbSchema } from "../utils/schemaGenerators";
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

  // SEO structured data
  const breadcrumbs = [{ name: "Home", path: "/" }];
  const schemas = [
    generateWebSiteSchema(),
    generatePersonSchema(),
    generateWebPageSchema({
      title: PAGE_SEO.home.title,
      description: PAGE_SEO.home.description,
      url: `https://ratneshsingh.com${PAGE_SEO.home.path}`,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <PageSEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        path={PAGE_SEO.home.path}
        image={PAGE_SEO.home.image}
        type="profile"
      />

      {/* Structured Data */}
      <StructuredData data={schemas} />

      <div className="min-h-screen pt-16 sm:pt-20 bg-gray-50">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 max-w-6xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          {/* Header Section */}
          <header className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center py-12 sm:py-20 border-b border-gray-100">
            <div className="relative z-10 px-4 max-w-3xl mx-auto">
              {/* Profile Icon - Google style simple */}
              <div className="relative inline-block mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-lg animate-pulse">
                  RS
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light mb-3 sm:mb-4 text-gray-900 leading-tight">
                Ratnesh Singh
              </h1>
              <div className="mb-6 sm:mb-10">
                <p className="text-base sm:text-xl font-normal text-gray-600">💼 Principal Software Engineer</p>
              </div>
              
              {/* Social Icons - Mobile-friendly */}
              <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
                <a 
                  href="https://x.com/ratneshshingh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-100 active:scale-95 transition-all duration-200 text-xl sm:text-2xl shadow-sm"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center hover:bg-blue-100 active:scale-95 transition-all duration-200 text-xl sm:text-2xl shadow-sm"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-100 active:scale-95 transition-all duration-200 text-xl sm:text-2xl shadow-sm"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ratnesh-singh-724bb22b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center hover:bg-blue-100 active:scale-95 transition-all duration-200 text-xl sm:text-2xl shadow-sm"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </header>

          {/* Main Content Section */}
          <main className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
            {/* About Section */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">About Me</span>
                <span className="text-2xl sm:text-3xl">👨‍💻</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Hi! I'm <strong className="text-gray-900">Ratnesh Singh</strong>, a Principal Software Engineer with over 12 years of expertise in designing and developing AI-driven ERP solutions, E-commerce platforms, and scalable web and mobile applications using Java, Spring Boot, React, and AWS.
              </p>
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base group">
                <FaDownload className="group-hover:animate-bounce" /> 
                <span>Download Resume</span>
              </button>
            </section>

            {/* Contact Information */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-5 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-5 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-2xl">📞</span>
                <span>Get In Touch</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-gray-700 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                    <strong className="text-gray-900">🎂 Age:</strong> 34
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                    <strong className="text-gray-900">🏠 Residence:</strong> India
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                    <strong className="text-gray-900">📍 Address:</strong> Mumbai, Maharashtra, 401209
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-gray-700 bg-white p-3 sm:p-4 rounded-xl shadow-sm break-all">
                    <strong className="text-gray-900">✉️ Email:</strong>{" "}
                    <a href="mailto:ratnesh.sheatvns@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      ratnesh.sheatvns@gmail.com
                    </a>
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                    <strong className="text-gray-900">📱 Phone:</strong> (+91) 9450903029
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                    <strong className="text-gray-900">💼 Freelance:</strong> 
                    <span className="ml-2 inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">Not Available</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Professional Experience & Expertise */}
            <section className="mb-10 sm:mb-16 max-w-6xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3 flex-wrap">
                <span>Expertise & Skills</span>
                <span className="text-2xl sm:text-3xl">🚀</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 leading-relaxed">
                Specializing in developing AI-based ERP platforms, integrated e-commerce solutions, and applications, ensuring top performance, scalability, and robust security.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    icon: <FaLaptopCode className="text-2xl sm:text-3xl" />,
                    title: "Backend Technologies",
                    description: "Java, Spring Boot, Microservices, REST APIs, JPA, Hibernate, PHP, Laravel",
                    color: "from-blue-500 to-cyan-500",
                    emoji: "⚙️"
                  },
                  {
                    icon: <FaCode className="text-2xl sm:text-3xl" />,
                    title: "Frontend Technologies",
                    description: "React.js, Next.js, JavaScript, TypeScript, HTML, CSS",
                    color: "from-purple-500 to-pink-500",
                    emoji: "🎨"
                  },
                  {
                    icon: <FaDatabase className="text-2xl sm:text-3xl" />,
                    title: "Databases",
                    description: "MySQL, MongoDB, PostgreSQL, Oracle",
                    color: "from-green-500 to-emerald-500",
                    emoji: "🗄️"
                  },
                  {
                    icon: <FaCloud className="text-2xl sm:text-3xl" />,
                    title: "Cloud & DevOps",
                    description: "AWS, Docker, Kubernetes, CI/CD with Jenkins",
                    color: "from-orange-500 to-red-500",
                    emoji: "☁️"
                  },
                  {
                    icon: <FaBug className="text-2xl sm:text-3xl" />,
                    title: "Testing",
                    description: "JUnit, Integration Testing, Mockito",
                    color: "from-red-500 to-pink-500",
                    emoji: "🧪"
                  },
                  {
                    icon: <FaShieldAlt className="text-2xl sm:text-3xl" />,
                    title: "Security",
                    description: "Spring Security, JWT, OAuth 2.0",
                    color: "from-indigo-500 to-purple-500",
                    emoji: "🔒"
                  },
                ].map((tech, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-200 border border-gray-100"
                  >
                    <div>
                      <div className={`bg-gradient-to-r ${tech.color} text-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-200`}>
                        {tech.icon}
                      </div>
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <h5 className="text-base sm:text-lg font-semibold text-gray-900">{tech.title}</h5>
                        <span className="text-xl">{tech.emoji}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                ))}
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
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
