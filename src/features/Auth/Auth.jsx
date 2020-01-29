import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import User from './components/User';
import Login from './components/Login';


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
