import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useOnClickOutside } from 'og-react';

import { compose } from 'utils';
import { RoomModal } from './modals';
import { ModalHeader as Header } from './components';
import { ModalActions } from './actions';


const propTypes = {
  isOpened: PropTypes.bool.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.string,

  hide: PropTypes.func.isRequired,
};

const CModal = ({ isOpened, type, title, options, hide }) => {
  if (!isOpened) {
    return null;
  }

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
  useOnClickOutside(ref, handleHide);

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
  isOpened: Modal.get('isOpened'),
  type: Modal.get('type'),
  title: Modal.get('title'),
});

const mapDispatchToProps = dispatch => ({
  hide() {
    dispatch(ModalActions.hide());
  },
});

export const Modal = compose(
  connect(mapStateToProps, mapDispatchToProps),
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
