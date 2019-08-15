import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { media } from 'js/constants/media';

import User from 'js/components/auth/User';
import Login from 'js/components/auth/Login';


const mapStateToProps = ({ Auth }) => ({
  isAuthorized: Auth.get('isAuthorized'),
});

const mapDispatchToProps = () => ({});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Auth extends Component {
  static propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
  };

  render() {
    const { isAuthorized } = this.props;

    return <>{isAuthorized ? <User /> : <Login />}</>;
  }
}

export default Auth;
