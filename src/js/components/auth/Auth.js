import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from 'js/constants/media';

import User from 'js/components/auth/User';
import Login from 'js/components/auth/Login';


const mapStateToProps = ({ Auth }) => ({
    isAuthorized: Auth.get('isAuthorized')
});

const mapDispatchToProps = (dispatch) => ({

});


@connect(mapStateToProps, mapDispatchToProps)
class Auth extends Component {

    render() {
        const { isAuthorized } = this.props;

        return (
            <Wrapper>
                {isAuthorized ? <User /> : <Login />}
            </Wrapper>
        )
    }
}


export default Auth;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
