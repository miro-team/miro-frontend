import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import uuidv4 from 'uuid/v4';


export default function Loader({ size, color, rotating, delays, ...props }) {
  return (
    <Wrapper size={size} {...props}>
      <LoaderBody isRotating={rotating}>
        {delays.map(delay => (
          <RoundedSquare animationDelay={delay} bgColor={color} key={uuidv4()} />
        ))}
      </LoaderBody>
    </Wrapper>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  delays: PropTypes.arrayOf(PropTypes.number),
  rotating: PropTypes.bool,
};

Loader.defaultProps = {
  size: 50,
  color: PropTypes.string,
  delays: [500, 250, 500, 250, 0, 250, 500, 250, 500],
  rotating: false,
};

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
  animation: ${Breathing} 1.5s infinite ${({ animationDelay }) => animationDelay}ms;
`;

const LoaderBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate3d(0, 0, 1, 45deg);
  animation: ${({ isRotating }) => isRotating && `${Rotating} 1.5s infinite 700ms`};
  float: left;
`;
