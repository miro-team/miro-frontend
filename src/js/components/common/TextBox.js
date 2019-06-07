import React from 'react';
import styled from 'styled-components';


function TextBox({ label, children, style, ...props }) {
    return (
        <Wrapper style={style}>
            <Label>{label}</Label>
            <StyledInput {...props}>{children}</StyledInput>
        </Wrapper>
    )
}

export default TextBox;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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
`;

const Label = styled.div`
    margin-bottom: 6px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
`;
