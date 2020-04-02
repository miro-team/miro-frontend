import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SemanticIcon from '@bit/semantic-org.semantic-ui-react.icon';
import 'semantic-ui-css/components/icon.min.css';


const propTypes = {
  marginPosition: PropTypes.string,
};

export const Icon = ({ marginPosition, ...rest }) => {
  return (
      <StyledSemanticIcon marginPosition={marginPosition} {...rest} />
  );
};

Icon.propTypes = propTypes;

const StyledSemanticIcon = styled(({ marginPosition, ...rest }) => (
    <SemanticIcon {...rest} />
  ))`
  ${({ marginPosition }) => marginPosition === 'right' && css`
    margin: 0 0 0 8px !important;
  `}
`;

