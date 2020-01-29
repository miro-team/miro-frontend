import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import { Auth } from 'features/Auth';


const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Dropdown extends Component {
  render() {
    return (
      <Wrapper>
        <Auth />
      </Wrapper>
    );
  }
}

export default Dropdown;

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
