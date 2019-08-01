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
    logout() {
        dispatch(AuthActions.logoutRequest);
    }
});


@connect(mapStateToProps, mapDispatchToProps)
class User extends Component {

    state = {
        login: null,
        password: null
    }

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        const { } = this.props;

        return (
            <ButtonWrapper>
                <Button onClick={this.handleLogout}>Logout</Button>
            </ButtonWrapper>
        )
    }
}


export default User;


const ButtonWrapper = styled.div`
    margin-top: 15px;
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
