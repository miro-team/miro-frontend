import React from 'react';
import styled from 'styled-components';

import { media } from 'js/constants/media';


export default function TextBox({ label, children, style, className, ...props }) {
    return (
        <Wrapper className={className}>
            <Label>{label}</Label>
            <StyledInput {...props}>{children}</StyledInput>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    appearance: none;
    border: 1px solid #D8D8D8;
    border-radius: 2px;
    padding: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    min-height: 33px;

    ${media.xs} {
        font-size: 14px;
        padding: 6px;
    }
`;

const Label = styled.div`
    margin-bottom: 6px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    ${media.xs} {
        font-size: 14px;
    }
`;
