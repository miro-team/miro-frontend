import React from 'react'
import styled from 'styled-components';

import { media } from 'js/constants/media';

import MenuSvg from 'img/svg/menu.svg';


function Header({handleToggleMobileSidebar}) {
    return (
        <Wrapper>
            <MobileSidebarButton onClick={handleToggleMobileSidebar}><StyledIcon src={MenuSvg} /></MobileSidebarButton><Logo>MIRO</Logo>
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
    ${media.xs} {
        height: 45px;
        min-height: 45px;
    }
`;

const StyledIcon = styled.img`
    width: 22px;
    height: 22px;
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

const MobileSidebarButton = styled.div`
    display: none;
    ${media.xs} {
        width: 45px;
        min-width: 45px;
        border: 0;
        height: 100%;
        background: #c65757;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        display: flex;
    }
`;
