import React from 'react';
import { connect } from 'react-redux';

import { compose } from 'utils';


const CProfile = () => <div>Profile</div>;

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const Profile = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CProfile);
