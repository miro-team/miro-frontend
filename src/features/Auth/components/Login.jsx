import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import { getValidationSchema } from 'utils';
import { createFormikField } from 'hoc/createFormikField';

import { AuthActions, NotificationActions } from 'core/actions';

import Button from 'shared/components/Button';
import TextInput from 'shared/components/TextInput';
import Notification from 'shared/components/Notification';


const FormikField = createFormikField(TextInput);

const mapStateToProps = ({ Notifications, App }) => ({
  notification: Notifications.get('login'),
  process: App.get('process'),
});

const mapDispatchToProps = dispatch => ({
  loginRequest(payload) {
    dispatch(AuthActions.loginRequest(payload));
  },
  clearNotification(payload) {
    dispatch(NotificationActions.clearNotification(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Login extends Component {
  static propTypes = {
    notification: PropTypes.object.isRequired,
    process: PropTypes.string.isRequired,

    loginRequest: PropTypes.func.isRequired,
    clearNotification: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    this.handleClearNotification();
  }

  handleClearNotification = () => {
    const { notification, clearNotification } = this.props;

    if (Object.keys(notification).length !== 0) {
      clearNotification('login');
    }
  };

  handleLogin = (values) => {
    const { loginRequest, clearNotification } = this.props;
    const { username, password } = values;

    clearNotification('login');
    loginRequest({
      username,
      password,
    });
  };

  render() {
    const { notification, process } = this.props;

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
          render={({ touched, errors }) => (
            <Form onChange={this.handleClearNotification}>
              <InputSet>
                <InputWrapper>
                  <StyledFormikField
                    label="Логин"
                    type="text"
                    name="username"
                    errors={errors}
                    touched={touched}
                  />
                </InputWrapper>
                <InputWrapper>
                  <StyledFormikField
                    label="Пароль"
                    type="password"
                    name="password"
                    errors={errors}
                    touched={touched}
                  />
                </InputWrapper>
              </InputSet>
              <NotificationWrapper>
                <Notification data={notification} />
              </NotificationWrapper>
              <ButtonWrapper>
                <StyledButton type="submit" disabled={process === 'login'} inverted>
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
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const InputSet = styled.div``;

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

const NotificationWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;
