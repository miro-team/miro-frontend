import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// import { media } from 'js/constants/media';
import getValidationSchema from 'js/utils/getValidationSchema';
import createFormikField from 'js/components/common/hoc/createFormikField';

import * as AuthActions from 'js/actions/AuthActions';

import Button from 'js/components/common/Button';
import TextBox from 'js/components/common/TextBox';


const FormikField = createFormikField(TextBox);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  loginRequest(payload) {
    dispatch(AuthActions.loginRequest(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };

  handleLogin = ({ username, password }, { setSubmitting }) => {
    const { loginRequest } = this.props;

    loginRequest({
      username,
      password,
    });

    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  render() {
    const initialValues = {
      username: '',
      password: '',
    };

    return (
      <Wrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema('login')}
          onSubmit={this.handleLogin}
          validateOnChange={false}
          enableReinitialize
          render={({ isSubmitting }) => (
            <Form>
              <InputSet>
                <InputWrapper>
                  <StyledFormikField label="Логин" type="text" name="username" />
                </InputWrapper>
                <InputWrapper>
                  <StyledFormikField label="Пароль" type="password" name="password" />
                </InputWrapper>
              </InputSet>
              <ButtonWrapper>
                <StyledButton type="submit" disabled={isSubmitting} inverted>
                  Войти
                </StyledButton>
              </ButtonWrapper>
            </Form>
          )}
        />
      </Wrapper>
    );
  }
}

export default Login;

const Wrapper = styled.div`
  padding: 25px 25px 30px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const InputSet = styled.div`
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  height: 40px;
`;

const StyledFormikField = styled(FormikField)`
  div {
    font-size: 14px;
  }
  input {
    height: 30px;
  }
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  height: 40px;
`;
