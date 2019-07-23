import React from 'react'
import styled from 'styled-components';

import { media } from 'js/constants/media';

import MenuSvg from 'img/svg/menu.svg';
import UserSvg from 'img/svg/user.svg'


function Header({handleToggleMobileSidebar, handleToggleDropdown}) {
    return (
        <Wrapper>
            <HeaderLeft>
                <MobileSidebarButton onClick={handleToggleMobileSidebar}><StyledMenuIcon src={MenuSvg} /></MobileSidebarButton>
                <Logo>MIRO</Logo>
            </HeaderLeft>
            <HeaderRight>
                <UserProfile onClick={handleToggleDropdown}>Ваш профиль<StyledUserIcon src={UserSvg} /></UserProfile>
            </HeaderRight>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 53px;
    min-height: 53px;
    background: #c65757;
    display: flex;
    justify-content: space-between;
    ${media.xs} {
        height: 45px;
        min-height: 45px;
    }
`;

const StyledMenuIcon = styled.img`
    width: 22px;
    height: 22px;
`;

const StyledUserIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;
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

const UserProfile = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;  
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px;
    height: 100%;
    cursor: pointer;
    user-select: none;

    width: 250px;
    border-left: 1px solid #a53232;
    border-right: 1px solid #a53232;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`;
