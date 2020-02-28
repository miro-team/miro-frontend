import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { compose } from 'utils';
import { ReactComponent as CloseIcon } from 'shared/assets/close.svg';


const propTypes = {
  children: PropTypes.node,

  handleHide: PropTypes.func.isRequired,
};

const CModalHeader = ({ handleHide, children }) => (
  <Wrapper>
    {children}
    <StyledCloseIcon onClick={handleHide} />
  </Wrapper>
);

CModalHeader.propTypes = propTypes;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({});

export const ModalHeader = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CModalHeader);

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
