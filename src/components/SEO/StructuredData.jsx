import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * StructuredData Component
 * Adds JSON-LD structured data to pages for enhanced search engine understanding
 * 
 * @param {Object} props
 * @param {Object|Array<Object>} props.data - JSON-LD structured data object(s)
 */
const StructuredData = ({ data }) => {
  // Handle both single objects and arrays of objects
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {schemas.map((schema) => (
        <script key={schema['@type'] || JSON.stringify(schema).substring(0, 50)} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

StructuredData.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]).isRequired,
};

export default StructuredData;
