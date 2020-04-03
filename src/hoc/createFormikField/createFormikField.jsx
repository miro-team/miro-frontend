import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export default function createFormikField(Comp) {
  function FormikField({ name, touched, errors, ...rest }) {
    const showError = errors[name] && touched[name];
    return (
      <>
        <Field name={name} render={({ field }) => <Comp {...field} {...rest} />} />
        {showError && <Error>{errors[name]}</Error>}
      </>
    );
  }

  FormikField.propTypes = {
    name: PropTypes.string.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
  };

  return FormikField;
}

const Error = styled.div`
  font-size: 12px;
  color: #cc0000;
  border-top: 2px solid #cc0000;
  padding-top: 7px;
`;
