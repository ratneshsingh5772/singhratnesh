import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageSEO from "../components/SEO/PageSEO";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto-redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <PageSEO
        title="404 - Page Not Found"
        description="The page you are looking for doesn't exist or has been moved."
        keywords="404, page not found, error"
        path="/404"
        image="/images/404-og.jpg"
      />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mt-4 mb-2">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all shadow-lg hover:shadow-xl"
            >
              Go Back Home
            </button>

            <p className="text-sm text-gray-500">
              You'll be automatically redirected in 5 seconds...
            </p>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Or visit one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate("/resume")}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Resume
              </button>
              <button
                onClick={() => navigate("/services")}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/portfolio")}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
