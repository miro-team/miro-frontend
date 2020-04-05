import React from 'react';
import { inject } from 'mobx-react';
import { Switch } from 'react-router-dom';

import { compose } from 'lib/utils';
import { Content } from 'ui/layout';
import { PrivateRoute } from 'lib/components';
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
