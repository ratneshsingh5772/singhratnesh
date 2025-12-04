import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

const Row = ({ index, style, data }) => (
  <div style={style} className="flex items-center px-4 border-b border-gray-200">
    <div className="py-4">
      <h3 className="font-semibold">{data[index].title}</h3>
      <p className="text-sm text-gray-600">{data[index].description}</p>
    </div>
  </div>
);

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const VirtualizedList = ({ items }) => {
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      width="100%"
      itemData={items}
    >
      {Row}
    </List>
  );
};

VirtualizedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VirtualizedList;
