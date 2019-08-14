import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

// import { media } from 'js/constants/media';

import Auth from 'js/components/auth/Auth';


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
  position: absolute;
  padding: 25px 25px 30px;
  box-shadow: 0 10px 21px 0 rgba(173, 182, 217, 0.3);
  animation: ${Appear} 0.2s linear;
  z-index: 9999;
`;
