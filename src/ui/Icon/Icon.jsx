import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SemanticIcon from '@bit/semantic-org.semantic-ui-react.icon';
import 'semantic-ui-css/components/icon.min.css';


const propTypes = {
  invertMargin: PropTypes.bool,
};

export const Icon = ({ invertMargin, ...rest }) => {
  return (
      <StyledSemanticIcon invertMargin={invertMargin} {...rest} />
  )
}

Icon.propTypes = propTypes;

const StyledSemanticIcon = styled(({ invertMargin, ...rest }) => (
    <SemanticIcon {...rest} />
  ))`
  ${({ invertMargin }) => invertMargin && css`
    margin: 0 0 0 8px !important;
  `}
`;

