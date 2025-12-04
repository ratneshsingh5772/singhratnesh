// SEO Configuration for all pages
// Replace with your actual domain and information

export const SITE_CONFIG = {
  siteName: "Ratnesh Singh - Full Stack Developer",
  siteUrl: "https://ratneshsingh.com", // Replace with your actual domain
  defaultTitle: "Ratnesh Singh - Full Stack Developer & ERP Consultant",
  defaultDescription: "Full Stack Developer specializing in React, Node.js, and Enterprise Solutions. Lead Consultant at Innova Solutions with expertise in EASY ERP.",
  defaultImage: "/images/og-image.jpg", // Add your default OG image
  twitterHandle: "@ratneshsingh", // Replace with your Twitter handle
  author: "Ratnesh Singh",
  keywords: "Full Stack Developer, React Developer, Node.js, ERP Consultant, Web Development, Mumbai Developer",
  language: "en",
  locale: "en_US",
};

// Organization structured data
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ratnesh Singh",
  url: SITE_CONFIG.siteUrl,
  email: "ratnesh.sheatvns@gmail.com",
  telephone: "+919450903029",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "401209",
    addressCountry: "IN"
  },
  jobTitle: "Lead Consultant - Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Innova Solutions"
  },
  sameAs: [
    // Add your social media profiles
    "https://github.com/ratneshsingh5772",
    "https://linkedin.com/in/ratneshsingh",
  ]
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: "Ratnesh Singh - Full Stack Developer | React & Node.js Expert",
    description: "Full Stack Developer with 8+ years of experience in React, Node.js, and Enterprise Solutions. Currently Lead Consultant at Innova Solutions (Verizon Client).",
    keywords: "Full Stack Developer, React Developer, Node.js Developer, JavaScript Expert, Mumbai Developer, Web Development",
    path: "/",
    image: "/images/home-og.jpg",
  },
  resume: {
    title: "Resume - Ratnesh Singh | Full Stack Developer Experience",
    description: "Professional resume of Ratnesh Singh showcasing 8+ years of full stack development experience, technical skills, certifications, and project achievements.",
    keywords: "Resume, CV, Full Stack Developer Experience, Technical Skills, Work History, Professional Profile",
    path: "/resume",
    image: "/images/resume-og.jpg",
  },
  services: {
    title: "Services - EASY ERP Solutions | Enterprise Resource Planning",
    description: "Comprehensive EASY ERP solutions for enterprise resource planning including CRM, Inventory Management, E-commerce Integration, and Financial Management.",
    keywords: "ERP Solutions, EASY ERP, Enterprise Software, Business Management, CRM, Inventory Management, E-commerce Integration",
    path: "/services",
    image: "/images/services-og.jpg",
  },
  portfolio: {
    title: "Portfolio - Ratnesh Singh | Web Development Projects",
    description: "Explore my portfolio of web development projects including React applications, Node.js backends, and enterprise solutions built with modern technologies.",
    keywords: "Portfolio, Web Projects, React Projects, Full Stack Projects, Development Work, Case Studies",
    path: "/portfolio",
    image: "/images/portfolio-og.jpg",
  },
  contact: {
    title: "Contact Ratnesh Singh | Get In Touch for Web Development",
    description: "Get in touch with Ratnesh Singh for web development projects, consultation, or collaboration. Available for freelance and consulting opportunities.",
    keywords: "Contact, Hire Developer, Web Development Services, Freelance Developer, Consultation, Mumbai Developer",
    path: "/contact",
    image: "/images/contact-og.jpg",
  },
};

// Generate full URL for a path
export const getFullUrl = (path) => {
  return `${SITE_CONFIG.siteUrl}${path}`;
};

// Get canonical URL
export const getCanonicalUrl = (path) => {
  return getFullUrl(path);
};

// Get Open Graph image URL
export const getOgImageUrl = (imagePath) => {
  if (imagePath.startsWith('http')) return imagePath;
  return getFullUrl(imagePath);
};
