import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function getMessageColor(type) {
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
}

export default function Notification({ data }) {
  const { type, message } = data || {};
  const color = getMessageColor(type);

  return (
    <Wrapper color={color} hasPadding={!!message}>
      {message}
    </Wrapper>
  );
}

Notification.propTypes = {
  data: PropTypes.shape({ type: PropTypes.string, message: PropTypes.string }).isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  flex-basis: 100%;
  color: ${({ color }) => color};
  text-align: center;
  font-size: 12px;
`;
