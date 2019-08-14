import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { media } from 'js/constants/media';

import * as AuthActions from 'js/actions/AuthActions';

import Button from 'js/components/common/Button';
import TextBox from 'js/components/common/TextBox';


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

  state = {
    username: null,
    password: null,
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    const { loginRequest } = this.props;
    const { username, password } = this.state;

    loginRequest({
      username,
      password,
    });
  };

  render() {
    return (
      <form>
        <InputSet>
          <InputWrapper>
            <StyledTextBox label="Логин" onChange={this.handleUsernameChange} required />
          </InputWrapper>
          <InputWrapper>
            <StyledTextBox
              label="Пароль"
              type="password"
              onChange={this.handlePasswordChange}
              required
            />
          </InputWrapper>
        </InputSet>
        <ButtonWrapper>
          <StyledButton type="submit" inverted onClick={this.handleLogin}>
            Войти
          </StyledButton>
        </ButtonWrapper>
      </form>
    );
  }
}

export default Login;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const InputSet = styled.div`
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  height: 40px;
`;

const StyledTextBox = styled(TextBox)`
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
