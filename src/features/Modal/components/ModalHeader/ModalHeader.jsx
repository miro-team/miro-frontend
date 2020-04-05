import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import { compose } from 'lib/utils';
import { Icon } from 'ui/common';


const propTypes = {
  children: PropTypes.node,

  handleHide: PropTypes.func.isRequired,
};

const CModalHeader = ({ handleHide, children }) => (
  <Wrapper>
    {children}
    <StyledIcon onClick={handleHide} name="close" />
  </Wrapper>
);

CModalHeader.propTypes = propTypes;

const mapStateToProps = () => ({});

export const ModalHeader = compose(
  inject(mapStateToProps),
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
  border-radius: 10px 10px 0 0;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  cursor: pointer;
`;
