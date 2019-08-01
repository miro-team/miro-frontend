import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from 'js/constants/media';

import * as AuthActions from 'js/actions/AuthActions';

import Button from 'js/components/common/Button';
import TextBox from 'js/components/common/TextBox';


const mapStateToProps = ({ UI }) => ({

});

const mapDispatchToProps = (dispatch) => ({
    login(payload) {
        dispatch(AuthActions.loginRequest(payload));
    }
});


@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {

    state = {
        login: null,
        password: null
    }

    handleLoginChange = (e) => {
        this.setState('login', e.target.value);
    }

    handlePasswordChange = (e) => {
        this.setState('password', e.target.value);
    }

    handleLogin = () => {
        this.props.login({
            login: this.state.login,
            password: this.state.password
        });
    }

    render() {
        const { } = this.props;

        return (
            <form>
                <InputSet>
                    <InputWrapper>
                        <StyledTextBox label="Логин" onChange={this.handleLoginChange} required />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledTextBox label="Пароль" type="password" onChange={this.handlePasswordChange} required />
                    </InputWrapper>
                </InputSet>
                <ButtonWrapper>
                    <StyledButton type="submit" inverted onChange={this.handleLogin}>Войти</StyledButton>
                </ButtonWrapper>
            </form>
        )
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
