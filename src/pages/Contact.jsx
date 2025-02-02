import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Contact.module.css";

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

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Header Section */}
        <header className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact Me</h1>
        </header>

        <div className="row p-4">
          {/* Contact Info Section */}
          <div className="col-md-6">
            <h3 className={styles.sectionTitle}>Get in <span className={styles.primaryText}>Touch</span></h3>
            <div className={styles.mapContainer}>
              <iframe
                title="Google Maps"
                className={styles.googleMap}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093663!2d144.95373531531877!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df6c20a5d%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1614065245687!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <p><FaMapMarkerAlt className={styles.icon} /> Mumbai,Maharashtra, India,401209</p>
            <p><FaEnvelope className={styles.icon} /> <a href="mailto:ratnesh.sheatvns@gmail.com">ratnesh.sheatvns@gmail.com</a></p>
            <p><FaPhone className={styles.icon} /> +91 9022835872</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h3 className={styles.sectionTitle}>Send a <span className={styles.primaryText}>Message</span></h3>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>

              {/* reCAPTCHA */}
              <div className="mb-3">
                <div className={styles.recaptcha}>
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=your-site-key&co=aHR0cHM6Ly93d3cuZXhhbXBsZS5jb206NDQz&hl=en&v=your-version&size=normal&cb=your-callback"
                    width="304"
                    height="78"
                    role="presentation"
                  ></iframe>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>

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

export default Contact;
