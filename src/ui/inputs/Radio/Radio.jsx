import React from 'react';
import PropTypes from 'prop-types';
import SemanticRadio from '@bit/semantic-org.semantic-ui-react.radio';
import 'semantic-ui-css/components/checkbox.min.css';


const propTypes = {
  checked: PropTypes.bool.isRequired,

  onChange: PropTypes.func,
};

export const Radio = ({ checked, value, onChange, name, ...rest }) => {
  return (
    <SemanticRadio
      checked={checked}
      value={value}
      onChange={onChange}
      name={name}
      {...rest} />
  );
};

Radio.propTypes = propTypes;
