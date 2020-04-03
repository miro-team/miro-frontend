import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled, { keyframes } from 'styled-components';

import { compose, useOnClickOutside } from 'utils';


const propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool.isRequired,

  hide: PropTypes.func.isRequired,
};

const CDropdown = ({ isOpened, hide, children }) => {
  const handleHide = () => {
    hide();
  };

  const ref = useRef(null);
  useOnClickOutside(ref, handleHide, isOpened);

  if (!isOpened) {
    return null;
  }

  return (
    <Wrapper ref={ref}>
      {children}
    </Wrapper>
  );
};

CDropdown.propTypes = propTypes;

const mapStateToProps = ({ Dropdown }) => ({
  isOpened: Dropdown.isOpened,

  hide: Dropdown.hide,
});

export const Dropdown = compose(
  inject(mapStateToProps),
)(CDropdown);

const Appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(45px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 250px;
  right: 0;
  position: absolute;
  box-shadow: 0 10px 21px 0 rgba(173, 182, 217, 0.3);
  animation: ${Appear} .2s linear;
  z-index: 9999;
  border-radius: 0 0 7px 7px;
`;
