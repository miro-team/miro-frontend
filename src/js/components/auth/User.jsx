import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { media } from 'js/constants/media';

import * as AuthActions from 'js/actions/AuthActions';

import Button from 'js/components/common/Button';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logoutRequest() {
    dispatch(AuthActions.logoutRequest);
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class User extends Component {
  static propTypes = {
    logoutRequest: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    const { logoutRequest } = this.props;

    logoutRequest();
  };

  render() {
    return (
      <ButtonWrapper>
        <Button onClick={this.handleLogout}>Logout</Button>
      </ButtonWrapper>
    );
  }
}

export default User;

const ButtonWrapper = styled.div`
  margin-top: 15px;
  height: 40px;
`;
