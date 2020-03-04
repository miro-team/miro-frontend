import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SemanticButton from '@bit/semantic-org.semantic-ui-react.button';
import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/reset.min.css';


const propTypes = {
  children: PropTypes.node,
}

export const Button = ({ children, ...props }) => {
  return (
    <StyledSemanticButton {...props}>
      {children}
    </StyledSemanticButton>
  )
}

Button.propTypes = propTypes;

const StyledSemanticButton = styled(SemanticButton)`
  &.primary.button { 
    background-color: #c65757 !important;
    &:hover {
      background-color: #ad4343 !important;
    }
    &:active {
      background-color: #923636 !important;
    }
  }
`;
