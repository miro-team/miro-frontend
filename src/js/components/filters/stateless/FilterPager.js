import React from 'react';
import styled from 'styled-components';

import { media } from 'js/constants/media';

import FilterIconBlack from 'img/svg/filterBlack.svg';
import FilterIconWhite from 'img/svg/filterWhite.svg';
import CalendarIconBlack from 'img/svg/calendarBlack.svg';
import CalendarIconWhite from 'img/svg/calendarWhite.svg';


export default function FilterPager({ activeTab, handleTabChange }) {
    return (
        <Wrapper>
            <StyledButton active={activeTab === 0} onClick={handleTabChange} id={0}><Icon src={activeTab === 0 ? FilterIconWhite : FilterIconBlack} alt="Filter Icon" />Аудитория</StyledButton>
            <StyledButton active={activeTab === 1} onClick={handleTabChange} id={1}><Icon src={activeTab === 1 ? CalendarIconWhite : CalendarIconBlack} alt="Calendar Icon" />Дата</StyledButton>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    border-radius: 30px;
    border: 1px solid #D8D8D8;
    margin-bottom: 25px;

    ${media.xs} {
        margin-bottom: 15px;
    }
`;

const StyledButton = styled.button`
    appearance: none;
    cursor: ${({ active }) => !active && 'pointer'};
    flex: ${({ active }) => active ? 5 : 4};
    border-radius: 30px;
    border: 0;
    background: ${({ active }) => active && '#C65757'};
    opacity: ${({ active }) => active ? 1 : 0.6};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: ${({ active }) => active && 500};
    font-size: 16px;
    line-height: 19px;
    color: ${({ active }) => active && '#fff'};

    ${media.xs} {
        font-size: 14px;
        padding: 7px;
    }
`;

const Icon = styled.img`
    margin-right: 8px;
`;
