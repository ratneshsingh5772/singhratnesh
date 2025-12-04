import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { SITE_CONFIG, getCanonicalUrl, getOgImageUrl } from '../../config/seoConfig';

/**
 * PageSEO Component
 * Handles all meta tags for a page including Open Graph and Twitter Cards
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords (comma-separated)
 * @param {string} props.path - Current page path
 * @param {string} props.image - Open Graph image URL
 * @param {string} props.type - Open Graph type (default: 'website')
 * @param {string} props.author - Page author (optional)
 * @param {Date} props.publishedTime - Article published time (optional)
 * @param {Date} props.modifiedTime - Article modified time (optional)
 * @param {Array<string>} props.tags - Article tags (optional)
 */
const PageSEO = ({
  title,
  description,
  keywords,
  path,
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  tags = [],
}) => {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.siteName}` : SITE_CONFIG.defaultTitle;
  const metaDescription = description || SITE_CONFIG.defaultDescription;
  const metaKeywords = keywords || SITE_CONFIG.keywords;
  const canonicalUrl = getCanonicalUrl(path);
  const ogImage = getOgImageUrl(image || SITE_CONFIG.defaultImage);
  const metaAuthor = author || SITE_CONFIG.author;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={SITE_CONFIG.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={metaAuthor} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title || SITE_CONFIG.defaultTitle} />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime.toISOString()} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime.toISOString()} />
      )}
      {type === 'article' && tags.length > 0 && 
        tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)
      }

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title || SITE_CONFIG.defaultTitle} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Format Detection */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
    </Helmet>
  );
};

PageSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  path: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article', 'profile']),
  author: PropTypes.string,
  publishedTime: PropTypes.instanceOf(Date),
  modifiedTime: PropTypes.instanceOf(Date),
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default PageSEO;
