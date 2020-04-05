import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SemanticDropdown from '@bit/semantic-org.semantic-ui-react.dropdown';
import 'semantic-ui-css/components/dropdown.min.css';
import 'semantic-ui-css/components/transition.min.css';
import 'semantic-ui-css/components/label.min.css';
import 'semantic-ui-css/components/button.min.css';


const propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.any,
  multiple: PropTypes.bool,

  onChange: PropTypes.func,
};

export const Select = ({ size, className, options, value, onChange, multiple, ...props }) => {

  if (multiple && !value) {
    value = [];
  }

  return (
    <StyledSemanticDropdown
      fluid
      selection
      button
      options={options}
      value={value}
      onChange={onChange}
      multiple={multiple}
      className={size ? `${className} ${size}` : className} // TODO: Fix undefined if size is set without classname
      {...props}
    />
  );
};

Select.propTypes = propTypes;

const StyledSemanticDropdown = styled(SemanticDropdown)`
  >input {
    &:focus {
      border-color: #c65757;
    }
  }
  &.ui.active.button:hover {
    background-color: unset !important;
  }
  &.ui.button {
    font-weight: unset !important;
    margin: 0;
  }
  .text.default {
    opacity: 0.25;
  }
`;
