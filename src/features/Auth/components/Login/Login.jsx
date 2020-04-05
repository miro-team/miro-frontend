import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { FormikInput } from 'handy-formik';

import { compose, getValidationSchema } from 'lib/utils';
import { Input, Button } from 'ui/inputs';
import { InputGroup, InputRow, InputWrapper } from 'ui/layout';


class CLogin extends Component {
  static propTypes = {
    processes: PropTypes.array,

    login: PropTypes.func.isRequired,
  };

  handleClearNotification = () => {

  }

  handleLogin = (values) => {
    const { login } = this.props;
    const { username, password } = values;

    login(username, password);
  };

  render() {
    const { processes } = this.props;
    const loginInProgress = processes.includes('login');

    return (
      <Wrapper>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={getValidationSchema('login')}
          onSubmit={this.handleLogin}
          validateOnChange={false}
        >
          <Form>
            <StyledInputGroup>
              <InputRow margin="small">
                <InputWrapper>
                  <FormikInput
                    name="username"
                    render={props => (
                      <Input
                        size="small"
                        placeholder="Логин"
                        icon="user"
                        iconPosition="left"
                        formikProps={props}
                      />
                    )}
                  />
                </InputWrapper>
              </InputRow>
              <InputRow>
                <InputWrapper>
                  <FormikInput
                    name="password"
                    render={props => (
                      <Input
                        type="password"
                        size="small"
                        placeholder="Пароль"
                        icon="lock"
                        iconPosition="left"
                        formikProps={props}
                      />
                    )}
                  />
                </InputWrapper>
              </InputRow>
            </StyledInputGroup>
            {/* <NotificationWrapper>
              <Notification module="login" />
            </NotificationWrapper> */}
            <InputRow>
              <InputWrapper>
                <Button
                  type="submit"
                  disabled={loginInProgress}
                  loading={loginInProgress}
                  primary
                  size="small"
                >
                  Войти
              </Button>
              </InputWrapper>
            </InputRow>
          </Form>
        </Formik>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ App, Auth }) => ({
  processes: App.processes,
  login: Auth.login,
});

export const Login = compose(
  observer,
  inject(mapStateToProps),
)(CLogin);

const Wrapper = styled.div`
  padding: 25px 25px 30px;
`;

const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
`;

const NotificationWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;
