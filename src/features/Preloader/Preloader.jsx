import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled, { keyframes } from 'styled-components';

import { compose } from 'utils';
import { Loader } from 'ui';


const propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
};

const CPreloader = ({ isDisplayed }) => {
  return (
    <Wrapper isDisplayed={isDisplayed}>
      {isDisplayed && <Loader size={200} color='#c65658' rotating />}
    </Wrapper>
  );
};

CPreloader.propTypes = propTypes;

const mapStateToProps = ({ Preloader }) => ({
  isDisplayed: Preloader.isDisplayed,
});

export const Preloader = compose(
  inject(mapStateToProps),
)(CPreloader);

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${({ isDisplayed }) => isDisplayed ? 1 : 0};
  pointer-events: ${({ isDisplayed }) => isDisplayed ? 'auto' : 'none'};
  transition: opacity 1s;
`;
