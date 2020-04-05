import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SemanticInput from '@bit/semantic-org.semantic-ui-react.input';
import 'semantic-ui-css/components/transition.min.css';
import 'semantic-ui-css/components/input.min.css';
import 'semantic-ui-css/components/label.min.css';


const propTypes = {
  value: PropTypes.any,
  isInvalid: PropTypes.bool,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export const Input = ({ name, value, onChange, onBlur, formikProps, ...rest }) => (
  <StyledSemanticInput
    fluid
    error={formikProps ? formikProps.isInvalid : false}
    name={formikProps ? formikProps.name : name}
    value={formikProps ? formikProps.value : value}
    onChange={formikProps ? formikProps.onChange : onChange}
    onBlur={formikProps ? formikProps.onBlur : onBlur}
    {...rest}
  />
);

Input.propTypes = propTypes;

const StyledSemanticInput = styled(SemanticInput)`
  >input {
    &::placeholder {
      color: #000 !important;
      opacity: 0.25;
    }
    &:hover {
      border-color: rgba(34,36,38,.35);
    }
    &:focus {

    }
  }
`;
