import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SemanticButton from '@bit/semantic-org.semantic-ui-react.button';
import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/reset.min.css';


const propTypes = {
  children: PropTypes.node,

  onClick: PropTypes.func,
};

export const Button = ({ onClick, children, ...props }) => {
  return (
    <StyledSemanticButton
      fluid
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledSemanticButton>
  );
};

Button.propTypes = propTypes;

const StyledSemanticButton = styled(SemanticButton)`
  margin: 0 !important;
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
