import React from 'react';
import styled from 'styled-components';

import { media } from 'js/constants/media';


function Button({ inverted, children, ...props }) {
    return (
        <StyledButton {...props} inverted={inverted}>{children}</StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;

    background-color: ${({ inverted }) => inverted ? '#c65757' : '#fff'};
    color: ${({ inverted }) => inverted ? '#fff' : '#000'};
    border: 1px solid #c65757;
    text-decoration: none;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    transition: all 0.15s ease;

    ${media.xs} {
        font-size: 15px;
    }

    &:hover {
        cursor: pointer;
        ${media.smPlus} {
            background-color: ${({ inverted }) => !inverted && '#c65757'};
            color: ${({ inverted }) => !inverted && '#fff'};
            border: ${({ inverted }) => !inverted && 0};
            opacity: ${({ inverted }) => inverted && 0.7};
        }
    }
`;
