import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaFolderOpen,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaChartBar,
  FaExternalLinkAlt
} from "react-icons/fa";
import PageSEO from "../components/SEO/PageSEO";
import StructuredData from "../components/SEO/StructuredData";
import { PAGE_SEO } from "../config/seoConfig";
import { generateWebPageSchema, generateBreadcrumbSchema } from "../utils/schemaGenerators";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const categories = ["All", "Web Development", "App Development", "Cloud Solutions", "Data Analytics"];

const portfolioItems = [
  { 
    id: 1, 
    image: "https://source.unsplash.com/400x300/?code", 
    category: "Web Development", 
    title: "E-commerce Platform", 
    description: "Built with React.js & Spring Boot",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    id: 2, 
    image: "https://source.unsplash.com/400x300/?mobile", 
    category: "App Development", 
    title: "Healthcare App", 
    description: "Android & iOS App with Flutter",
    icon: <FaMobileAlt />,
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: 3, 
    image: "https://source.unsplash.com/400x300/?database", 
    category: "Data Analytics", 
    title: "Big Data Processing", 
    description: "Apache Kafka & Spark for data pipelines",
    icon: <FaChartBar />,
    color: "from-green-500 to-emerald-500"
  },
  { 
    id: 4, 
    image: "https://source.unsplash.com/400x300/?server", 
    category: "Cloud Solutions", 
    title: "AWS Cloud Infrastructure", 
    description: "Automated CI/CD & AWS Lambda",
    icon: <FaCloud />,
    color: "from-orange-500 to-red-500"
  },
  { 
    id: 5, 
    image: "https://source.unsplash.com/400x300/?dashboard", 
    category: "Web Development", 
    title: "Admin Dashboard", 
    description: "React.js & Tailwind CSS UI",
    icon: <FaCode />,
    color: "from-indigo-500 to-purple-500"
  },
  { 
    id: 6, 
    image: "https://source.unsplash.com/400x300/?ai", 
    category: "Data Analytics", 
    title: "AI-Powered Insights", 
    description: "Machine learning & NLP models",
    icon: <FaChartBar />,
    color: "from-pink-500 to-red-500"
  },
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

  // SEO structured data
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" }
  ];
  const schemas = [
    generateWebPageSchema({
      title: PAGE_SEO.portfolio.title,
      description: PAGE_SEO.portfolio.description,
      url: `https://ratneshsingh.com${PAGE_SEO.portfolio.path}`,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <PageSEO
        title={PAGE_SEO.portfolio.title}
        description={PAGE_SEO.portfolio.description}
        keywords={PAGE_SEO.portfolio.keywords}
        path={PAGE_SEO.portfolio.path}
        image={PAGE_SEO.portfolio.image}
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
                <FaFolderOpen />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 text-gray-900">My Portfolio</h1>
              <p className="text-base sm:text-lg text-gray-600">Showcasing My Work & Projects</p>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
            
            {/* Category Filters */}
            <section className="mb-8 sm:mb-12">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button 
                    key={category}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ${
                      selectedCategory === category 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* Portfolio Grid */}
            <section className="mb-10 sm:mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-200 border border-gray-100"
                  >
                    {/* Gradient Background Instead of Image */}
                    <div className={`relative overflow-hidden h-48 sm:h-56 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <div className="text-white text-6xl sm:text-7xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {item.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <div className="absolute bottom-4 right-4">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg transform group-hover:scale-110 transition-transform">
                            <FaExternalLinkAlt />
                          </div>
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.color} text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md text-lg`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                            {item.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4 text-gray-400 text-3xl">
                  <FaFolderOpen />
                </div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}

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

export default Portfolio;
