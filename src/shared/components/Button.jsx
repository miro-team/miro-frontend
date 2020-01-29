import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'core/constants/media';


export default function Button({ inverted, disabled, children, ...props }) {
  return (
    <StyledButton {...props} inverted={inverted} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  inverted: false,
  disabled: false,
  children: null,
};

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ inverted }) => (inverted ? '#c65757' : '#fff')};
  color: ${({ inverted }) => (inverted ? '#fff' : '#000')};
  border: 1px solid #c65757;
  text-decoration: none;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 'unset')};

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  transition: all 0.15s ease;

  ${media.xs} {
    font-size: 15px;
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    ${media.smPlus} {
      background-color: ${({ inverted }) => !inverted && '#c65757'};
      color: ${({ inverted }) => !inverted && '#fff'};
      border: ${({ inverted }) => !inverted && 0};
      opacity: ${({ inverted, disabled }) => inverted && !disabled && 0.7};
    }
  }
`;
