import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'js/constants/media';

import ArrowIcon from 'img/svg/arrow.svg';


export default function Select({ label, children, className, ...props }) {
  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <InputWrapper>
        <StyledArrowIcon />
        <StyledSelect {...props}>{children}</StyledSelect>
      </InputWrapper>
    </Wrapper>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  children: null,
  className: '',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  flex: 1;
  appearance: none;
  background: #fff;
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

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
