import React from 'react'
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';


Loader.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    color: PropTypes.string
}


export default function Loader({ size = defaultSize, color = '#8fb0ff', isRotating = true, ...props }) {
    return (
        <Wrapper size={size > 0 ? size : defaultSize} {...props}>
            <LoaderBody isRotating={isRotating}>
                {delays.map((delay, i) => <RoundedSquare animationDelay={delay} bgColor={color} key={i} />)}
            </LoaderBody>
        </Wrapper>
    )
}


const defaultSize = 50;

const delays = [
    500, 250, 500,
    250, 0, 250,
    500, 250, 500
];


const Breathing = keyframes`
    0% {
        transform: scale3d(0.3, 0.3, 1);
        opacity: 0.4;
    }
    10% {
        transform: scale3d(0.9, 0.9, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(0.3, 0.3, 1);
        opacity: 0.4;
    }
`;

const Rotating = keyframes`
    from {
        transform: rotate3d(0, 0, 1, 45deg);
    }
    to {
        transform: rotate3d(0, 0, 1, 405deg);
    }
`;

const Wrapper = styled.div`
    overflow: hidden;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    padding: ${({ size }) => size / 7}px;
`;

const RoundedSquare = styled.div`
    opacity: 0;
    position: relative;
    float: left;
    display: block;
    border-radius: 25%;
    width: 33.3%;
    height: 33.3%;
    background: ${({ bgColor }) => bgColor};
    animation: ${Breathing}  1.5s infinite ${({ animationDelay }) => animationDelay}ms;
`;

const LoaderBody = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotate3d(0, 0, 1, 45deg);
    animation: ${({ isRotating }) => isRotating && Rotating}  1.5s infinite 700ms;
    float: left;
`;
