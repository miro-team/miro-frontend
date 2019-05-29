import React from 'react';
import styled from 'styled-components';

import ArrowIcon from 'img/svg/arrow.svg';


function Select({ children, label, style, ...props }) {
    return (
        <Wrapper style={style}>
            <Label>{label}</Label>
            <StyledSelect {...props}>{children}</StyledSelect>
        </Wrapper>
    )
}

export default Select;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const StyledSelect = styled.select`
    appearance: none;
    position: relative;
    background: url(${ArrowIcon}) no-repeat;
    background-position: right 12px center;
    border: 1px solid #D8D8D8;
    border-radius: 2px;
    padding: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`;

const Label = styled.div`
    margin-bottom: 6px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
`;