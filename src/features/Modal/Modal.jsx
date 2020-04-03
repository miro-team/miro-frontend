import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import styled from 'styled-components';

import { compose, useOnClickOutside } from 'utils';
import { ModalHeader as Header } from './components';


const propTypes = {
  isOpened: PropTypes.bool.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  componentProps: PropTypes.object,

  hide: PropTypes.func.isRequired,
};

const CModal = ({ isOpened, title, component:Component, componentProps, hide }) => {
  const handleHide = () => {
    hide();
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
        <Content>
          {Component && <Component {...componentProps} />}
        </Content>
      </Body>
    </Wrapper>
  );
};

CModal.propTypes = propTypes;

const mapStateToProps = ({ Modal }) => ({
  isOpened: Modal.isOpened,
  title: Modal.title,
  component: Modal.component,
  componentProps: Modal.componentProps,

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
  min-height: 100px;
`;

const Content = styled.div`
  padding: 30px 30px 40px;
`;
