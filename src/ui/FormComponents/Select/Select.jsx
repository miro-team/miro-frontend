import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SemanticDropdown from '@bit/semantic-org.semantic-ui-react.dropdown';
import 'semantic-ui-css/components/transition.min.css';
import 'semantic-ui-css/components/dropdown.min.css';


const propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
}

export const Select = ({ size, className, options, ...props }) => {
  return (
    <StyledSemanticDropdown 
      fluid 
      selection 
      button 
      options={options} 
      className={size ? `${className} ${size}` : className} 
      {...props}
    />
  )
}

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
  }
`;
