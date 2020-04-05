import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { compose } from 'lib/utils';
import { User, Login } from './components';


const propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

const CAuth = ({ isAuthorized }) => (isAuthorized ? <User /> : <Login />);

CAuth.propTypes = propTypes;

const mapStateToProps = ({ Auth }) => ({
  isAuthorized: Auth.isAuthorized,
});

export const Auth = compose(
  inject(mapStateToProps),
)(CAuth);
