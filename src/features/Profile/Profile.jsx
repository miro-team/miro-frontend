import React from 'react';
import { inject } from 'mobx-react';

import { compose } from 'lib/utils';


const CProfile = () => <div>Profile</div>;

const mapStateToProps = () => ({});

export const Profile = compose(
  inject(mapStateToProps),
)(CProfile);
