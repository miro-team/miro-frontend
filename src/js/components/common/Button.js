import React from 'react';
import styled from 'styled-components';


function Button({ children, ...props }) {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;

    background-color: #fff;
    border: 1px solid #c65757;
    text-decoration: none;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    transition: all 0.15s ease;

    &:hover {
        cursor: pointer;
        background-color: #c65757;
        color: #fff;
        border: 0;
    }
`;
