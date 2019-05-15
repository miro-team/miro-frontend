import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
        <Logo>MIRO</Logo>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
    height: 53px;
    min-height: 53px;
    background: #C65757;
    display: flex;
    align-items: center;
`;

const Logo = styled.span`
    margin-left: 20px;

    color: #fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.08em;
`;
