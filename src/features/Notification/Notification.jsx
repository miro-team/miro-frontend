import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const propTypes = {
  notification: PropTypes.shape({ type: PropTypes.string, message: PropTypes.string }),
};

export const Notification = ({ notification }) => {
  const { type, message } = notification || {};

  const getMessageColor = () => {
    switch (type) {
      case 'success':
        return 'green';
      case 'error':
        return '#cc0000';
      case 'info':
        return 'blue';
      default:
        return '#000';
    }
  };

  const color = getMessageColor();

  return (
    <Wrapper color={color} hasPadding={!!message}>
      {message}
    </Wrapper>
  );
};

Notification.propTypes = propTypes;

const Wrapper = styled.div`
  width: 100%;
  flex-basis: 100%;
  color: ${({ color }) => color};
  text-align: center;
  font-size: 12px;
`;
