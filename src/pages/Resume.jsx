import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaBriefcase, 
  FaGraduationCap, 
  FaProjectDiagram, 
  FaCertificate,
  FaCalendarAlt
} from "react-icons/fa";
import PageSEO from "../components/SEO/PageSEO";
import StructuredData from "../components/SEO/StructuredData";
import { PAGE_SEO } from "../config/seoConfig";
import { generateWebPageSchema, generatePersonSchema, generateBreadcrumbSchema } from "../utils/schemaGenerators";

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

  // SEO structured data
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" }
  ];
  const schemas = [
    generatePersonSchema(),
    generateWebPageSchema({
      title: PAGE_SEO.resume.title,
      description: PAGE_SEO.resume.description,
      url: `https://ratneshsingh.com${PAGE_SEO.resume.path}`,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <PageSEO
        title={PAGE_SEO.resume.title}
        description={PAGE_SEO.resume.description}
        keywords={PAGE_SEO.resume.keywords}
        path={PAGE_SEO.resume.path}
        image={PAGE_SEO.resume.image}
        type="profile"
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
                <FaBriefcase />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 text-gray-900">My Resume</h1>
              <p className="text-base sm:text-lg text-gray-600">12+ Years of Professional Excellence</p>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
            
            {/* Profile Summary */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-4 sm:mb-6 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Profile Summary</span>
                <span className="text-2xl sm:text-3xl">💼</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed bg-gradient-to-br from-gray-50 to-blue-50 p-5 sm:p-6 rounded-2xl">
                <strong className="text-gray-900">Principal Software Engineer</strong> with over 12 years of experience in designing and developing scalable software solutions including AI-driven ERP systems, e-commerce platforms, and mobile applications using Java, React, AWS, and modern DevOps practices.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Work Experience</span>
                <span className="text-2xl sm:text-3xl">🚀</span>
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Lead Consultant",
                    company: "Innova Solutions (Client: Verizon)",
                    period: "Current",
                    description: "Leading the design and development of AI-powered telecom operation solutions integrated with mobile apps for Verizon, a leading telecommunications company in the US. Providing strategic technical architecture and mentoring development teams to deliver innovative solutions.",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Senior Software Engineer",
                    company: "Boston IVLTL Solutions",
                    period: "Aug 2018 – Present",
                    description: "Led backend architecture, designed RESTful APIs, developed microservices, optimized system performance, and mentored teams.",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Software Engineer",
                    company: "Open Space Services Pvt Ltd.",
                    period: "Aug 2014 – Aug 2018",
                    description: "Built dynamic Java and Spring-based e-commerce solutions, developed Magento customizations, and improved user experiences.",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Web Developer",
                    company: "Webszol Pvt Ltd.",
                    period: "Jun 2013 – Jul 2014",
                    description: "Developed responsive websites, applied SEO best practices, and optimized web performance.",
                    color: "from-orange-500 to-red-500"
                  },
                ].map((job, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-200 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`hidden sm:flex w-12 h-12 bg-gradient-to-r ${job.color} text-white rounded-xl items-center justify-center flex-shrink-0 shadow-md`}>
                        <FaBriefcase />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{job.title}</h4>
                        <p className="text-sm sm:text-base font-medium text-blue-600 mb-1">{job.company}</p>
                        <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" /> {job.period}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{job.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Key Skills</span>
                <span className="text-2xl sm:text-3xl">⚡</span>
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
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
                  "MongoDB",
                  "PostgreSQL",
                  "Oracle"
                ].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-700 rounded-xl text-sm sm:text-base font-medium hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-lg active:scale-95 transition-all duration-200 border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Education</span>
                <span className="text-2xl sm:text-3xl">🎓</span>
              </h3>
              <div className="space-y-4">
                {[
                  { degree: "B.Tech in Computer Science", institute: "GBTU", year: "2012", grade: "Grade: 70%" },
                  { degree: "12th (Science Stream)", institute: "Uttar Pradesh Board", year: "2008", grade: "" },
                  { degree: "10th", institute: "Uttar Pradesh Board", year: "2006", grade: "" },
                ].map((edu, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <FaGraduationCap />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900">{edu.degree}</h4>
                        <p className="text-sm text-gray-600">{edu.institute} | {edu.year}</p>
                        {edu.grade && <p className="text-sm text-blue-600 font-medium mt-1">{edu.grade}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Projects</span>
                <span className="text-2xl sm:text-3xl">📂</span>
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: "PROTA SYSTEM (ERP)",
                    duration: "36 Months",
                    description: "Developed ERP system including Sales Order, Purchase Orders, Inventory Management with Java, Spring Boot, AWS, Docker, and Kafka.",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    name: "Medikabazaar (E-Commerce Platform)",
                    duration: "36 Months",
                    description: "Designed and developed multi-vendor e-commerce solution using React.js frontend and Spring Boot microservices backend.",
                    color: "from-purple-500 to-pink-500"
                  },
                ].map((project, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-200 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`hidden sm:flex w-12 h-12 bg-gradient-to-r ${project.color} text-white rounded-xl items-center justify-center flex-shrink-0 shadow-md`}>
                        <FaProjectDiagram />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{project.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" /> Duration: {project.duration}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-10 sm:mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8 text-gray-900 flex items-center gap-2 sm:gap-3">
                <span className="text-gray-900">Certifications</span>
                <span className="text-2xl sm:text-3xl">🏆</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Java Basic - HackerRank",
                  "SQL Intermediate - HackerRank",
                  "SQL Advanced - HackerRank",
                  "Software Engineer Intern - HackerRank"
                ].map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-yellow-100"
                  >
                    <FaCertificate className="text-yellow-600 text-xl flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{cert}</span>
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
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-lg" />
            </button>
          </footer>
        </div>
      </div>
      </div>
    </>
  );
};

export default Resume;
