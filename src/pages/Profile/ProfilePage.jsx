import React from 'react';
import { inject } from 'mobx-react';
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

export const ProfilePage = compose(
  inject(mapStateToProps),
)(CProfilePage);
