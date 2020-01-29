import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'core/constants/media';


export default function TextInput({ label, children, className, ...props }) {
  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <StyledInput {...props}>{children}</StyledInput>
    </Wrapper>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  label: '',
  children: null,
  className: '',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  appearance: none;
`;

const Label = styled.div`
  margin-bottom: 6px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  ${media.xs} {
    font-size: 14px;
  }
`;
