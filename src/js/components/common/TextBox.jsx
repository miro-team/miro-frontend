import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'js/constants/media';


export default function TextBox({ label, children, className, ...props }) {
  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <StyledInput {...props}>{children}</StyledInput>
    </Wrapper>
  );
}

TextBox.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

TextBox.defaultProps = {
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
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  padding: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  min-height: 33px;

  ${media.xs} {
    font-size: 14px;
    padding: 6px;
  }
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
