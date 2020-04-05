import React from 'react';
import PropTypes from 'prop-types';
import SemanticCheckbox from '@bit/semantic-org.semantic-ui-react.checkbox';
import 'semantic-ui-css/components/checkbox.min.css';


const propTypes = {
  checked: PropTypes.bool.isRequired,

  onChange: PropTypes.func,
};

export const Checkbox = ({ checked, value, onChange, name, ...rest }) => {
  return (
    <SemanticCheckbox
    checked={checked}
    value={value}
    onChange={onChange}
    name={name}
      {...rest} />
  );
};

Checkbox.propTypes = propTypes;
