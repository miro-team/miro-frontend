import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';


export default function FilterOptions({ options, renderEmpty }) {
  if (!Array.isArray(options)) return null;

  const data = renderEmpty ? [{ id: -1, name: '---' }, ...options] : [...options];

  return data.map(({ id, name }) => (
    <option key={uuidv4()} value={id}>
      {name}
    </option>
  ));
}

FilterOptions.propTypes = {
  options: PropTypes.array,
  renderEmpty: PropTypes.bool,
};

FilterOptions.defaultProps = {
  options: [],
  renderEmpty: false,
};
