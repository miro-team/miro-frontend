import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { useOnClickOutside } from 'og-react';

import { compose } from 'utils';
import { DropdownActions } from './actions';


const propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool.isRequired,

  hide: PropTypes.func.isRequired,
};

const CDropdown = ({ isOpened, hide, children }) => {
  if (!isOpened) {
    return null;
  }

  const handleHide = () => {
    hide();
  };

  const ref = useRef(null);
  useOnClickOutside(ref, handleHide);

  return (
    <Wrapper ref={ref}>
      {children}
    </Wrapper>
  );
};

CDropdown.propTypes = propTypes;

const mapStateToProps = ({ Dropdown }) => ({
  isOpened: Dropdown.get('isOpened'),
});

const mapDispatchToProps = dispatch => ({
  hide() {
    dispatch(DropdownActions.hide());
  },
});

export const Dropdown = compose(
  connect(mapStateToProps, mapDispatchToProps),
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
  font-size: 14px;
  position: absolute;
  box-shadow: 0 10px 21px 0 rgba(173, 182, 217, 0.3);
  animation: ${Appear} 0.2s linear;
  z-index: 9999;
  border-radius: 0 0 7px 7px;
`;
