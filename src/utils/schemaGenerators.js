import { SITE_CONFIG } from '../config/seoConfig';

/**
 * Generate WebSite schema for the homepage
 */
export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.siteName,
  url: SITE_CONFIG.siteUrl,
  description: SITE_CONFIG.defaultDescription,
  inLanguage: SITE_CONFIG.language,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

/**
 * Generate WebPage schema for individual pages
 */
export const generateWebPageSchema = ({ title, description, url, datePublished, dateModified }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description: description,
  url: url,
  inLanguage: SITE_CONFIG.language,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.siteUrl}/#website`
  },
  ...(datePublished && { datePublished: datePublished.toISOString() }),
  ...(dateModified && { dateModified: dateModified.toISOString() }),
  author: {
    "@type": "Person",
    name: SITE_CONFIG.author
  }
});

/**
 * Generate Person schema (for About/Resume pages)
 */
export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ratnesh Singh",
  url: SITE_CONFIG.siteUrl,
  email: "ratnesh.sheatvns@gmail.com",
  telephone: "+919450903029",
  jobTitle: "Lead Consultant - Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Innova Solutions"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "401209",
    addressCountry: "IN"
  },
  sameAs: [
    "https://github.com/ratneshsingh5772",
    "https://linkedin.com/in/ratneshsingh",
  ],
  knowsAbout: [
    "JavaScript",
    "React",
    "Node.js",
    "Full Stack Development",
    "ERP Systems",
    "Web Development"
  ]
});

/**
 * Generate BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${SITE_CONFIG.siteUrl}${crumb.path}`
  }))
});

/**
 * Generate Product schema (for Services/ERP page)
 */
export const generateProductSchema = ({ name, description, price, currency = "INR", image }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: name,
  description: description,
  image: image,
  offers: {
    "@type": "Offer",
    price: price,
    priceCurrency: currency,
    availability: "https://schema.org/InStock",
    url: SITE_CONFIG.siteUrl
  },
  brand: {
    "@type": "Brand",
    name: "EASY ERP"
  }
});

/**
 * Generate SoftwareApplication schema (for ERP product)
 */
export const generateSoftwareSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EASY ERP",
  applicationCategory: "BusinessApplication",
  description: "Comprehensive Enterprise Resource Planning solution for modern businesses",
  operatingSystem: "Web-based",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR"
  },
  featureList: [
    "CRM Management",
    "Inventory Control",
    "E-commerce Integration",
    "Financial Management",
    "AI-Powered Insights"
  ]
});

/**
 * Generate Organization schema
 */
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.siteName,
  url: SITE_CONFIG.siteUrl,
  logo: `${SITE_CONFIG.siteUrl}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919450903029",
    contactType: "Customer Service",
    email: "ratnesh.sheatvns@gmail.com",
    availableLanguage: ["English", "Hindi"]
  },
  sameAs: [
    "https://github.com/ratneshsingh5772",
  ]
});

/**
 * Generate FAQPage schema
 */
export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

/**
 * Generate CreativeWork schema for Portfolio items
 */
export const generateCreativeWorkSchema = ({ name, description, url, image, dateCreated }) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: name,
  description: description,
  url: url,
  image: image,
  creator: {
    "@type": "Person",
    name: SITE_CONFIG.author
  },
  ...(dateCreated && { dateCreated: dateCreated.toISOString() })
});
