import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import { compose } from 'utils';
import { Content } from 'ui';
import { PrivateRoute } from 'shared/components/PrivateRoute';
import { ReservationsPage } from './Reservations';
import { ProfileSettingsPage } from './ProfileSettings';


const CProfilePage = () => (
  <Content>
    <Switch>
      <PrivateRoute component={ReservationsPage} path="/profile/reservations" />
      <PrivateRoute component={ProfileSettingsPage} path="/profile/settings" />
    </Switch>
  </Content>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ProfilePage = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CProfilePage);
