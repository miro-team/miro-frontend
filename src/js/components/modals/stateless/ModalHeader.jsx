import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CloseIcon from 'img/svg/close.svg';


export default function ModalHeader({ handleHideModal, children }) {
  return (
    <Wrapper>
      {children}
      <StyledCloseIcon onClick={handleHideModal} />
    </Wrapper>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node,

  handleHideModal: PropTypes.func.isRequired,
};

ModalHeader.defaultProps = {
  children: '',
};

const Wrapper = styled.div`
  background: #c65757;
  height: 60px;
  width: 100%;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: default;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  cursor: pointer;
`;
