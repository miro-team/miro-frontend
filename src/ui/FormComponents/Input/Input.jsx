import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SemanticInput from '@bit/semantic-org.semantic-ui-react.input';
import 'semantic-ui-css/components/transition.min.css';
import 'semantic-ui-css/components/input.min.css';


const propTypes = {
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  touched: PropTypes.bool,
  formikBag: PropTypes.object,
  error: PropTypes.string,
}

export const Input = ({ isValid, isInvalid, touched, formikBag, error, ...rest }) => {
  return (
      <StyledSemanticInput error={isInvalid} {...rest} />
  )
}

Input.propTypes = propTypes;

const StyledSemanticInput = styled(SemanticInput)`
  >input {
    &:hover {
      border-color: rgba(34,36,38,.35);
    }
    &:focus {

    }
  }
`;
