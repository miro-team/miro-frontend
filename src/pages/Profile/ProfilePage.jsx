import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import PrivateRoute from 'shared/components/PrivateRoute';
import Reservations from 'features/Reservations';
import Settings from 'features/Settings';


const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class ProfilePage extends Component {
  static propTypes = {};

  render() {
    return (
      <Switch>
        <PrivateRoute component={Reservations} path="/profile/reservations" />
        <PrivateRoute component={Settings} path="/profile/settings" />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default ProfilePage;
