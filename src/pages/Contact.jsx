import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaPaperPlane,
  FaUser,
  FaCommentDots
} from "react-icons/fa";
import PageSEO from "../components/SEO/PageSEO";
import StructuredData from "../components/SEO/StructuredData";
import { PAGE_SEO } from "../config/seoConfig";
import { generateWebPageSchema, generateOrganizationSchema, generateBreadcrumbSchema } from "../utils/schemaGenerators";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Contact = () => {
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
    { name: "Contact", path: "/contact" }
  ];
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      title: PAGE_SEO.contact.title,
      description: PAGE_SEO.contact.description,
      url: `https://ratneshsingh.com${PAGE_SEO.contact.path}`,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <PageSEO
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        keywords={PAGE_SEO.contact.keywords}
        path={PAGE_SEO.contact.path}
        image={PAGE_SEO.contact.image}
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
                <FaPaperPlane />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 text-gray-900">Get In Touch</h1>
              <p className="text-base sm:text-lg text-gray-600">Let's discuss your next project</p>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
              
              {/* Contact Info Section */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-normal mb-6 text-gray-900 flex items-center gap-2 sm:gap-3">
                    <span className="text-gray-900">Contact Info</span>
                    <span className="text-2xl sm:text-3xl">📍</span>
                  </h3>
                  
                  {/* Contact Cards */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaMapMarkerAlt className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-sm sm:text-base text-gray-600">Mumbai, Maharashtra, India, 401209</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-200">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaEnvelope className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a href="mailto:ratnesh.sheatvns@gmail.com" className="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium break-all">
                          ratnesh.sheatvns@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-200">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaPhone className="text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <a href="tel:+919450903029" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 font-medium">
                          +91 9450903029
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  <iframe
                    title="Google Maps"
                    className="w-full h-64 sm:h-80"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991394!2d72.74109995797474!3d19.082177512224693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1638360304492!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-normal mb-6 text-gray-900 flex items-center gap-2 sm:gap-3">
                  <span className="text-gray-900">Send Message</span>
                  <span className="text-2xl sm:text-3xl">✉️</span>
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="inline mr-2 text-gray-400" />
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaEnvelope className="inline mr-2 text-gray-400" />
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white" 
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaPhone className="inline mr-2 text-gray-400" />
                      Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white" 
                      placeholder="+91 1234567890" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaCommentDots className="inline mr-2 text-gray-400" />
                      Your Message
                    </label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none" 
                      rows="5" 
                      placeholder="Tell me about your project..." 
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base sm:text-lg group"
                  >
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>

            </div>

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

export default Contact;
