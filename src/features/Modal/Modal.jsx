import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled from 'styled-components';

import { compose, useOnClickOutside } from 'utils';
import { RoomModal } from './modals';
import { ModalHeader as Header } from './components';


const propTypes = {
  isOpened: PropTypes.bool.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.string,

  hide: PropTypes.func.isRequired,
};

const CModal = ({ isOpened, type, title, options, hide }) => {
  const handleHide = () => {
    hide();
  };

  const renderModal = () => {
    switch (type) {
      case 'room':
        return <RoomModal options={options} />;
      default:
        return null;
    }
  };

  const ref = useRef(null);
  useOnClickOutside(ref, handleHide, isOpened);

  if (!isOpened) {
    return null;
  }

  return (
    <Wrapper>
      <Body ref={ref}>
        <Header handleHide={handleHide}>{title}</Header>
        <Content>{renderModal()}</Content>
      </Body>
    </Wrapper>
  );
};

CModal.propTypes = propTypes;

const mapStateToProps = ({ Modal }) => ({
  isOpened: Modal.isOpened,
  type: Modal.type,
  title: Modal.title,

  hide: Modal.hide,
});

export const Modal = compose(
  inject(mapStateToProps),
)(CModal);

const Wrapper = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 550px;
  height: 400px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 20px;
`;
