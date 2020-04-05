import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';

import { compose } from 'lib/utils';


const propTypes = {
  component: PropTypes.any.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isAllowed: PropTypes.bool,
};

const CPrivateRoute = ({ component: PrivateComponent, isAuthorized, isAllowed = true, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAllowed && isAuthorized ? <PrivateComponent {...props} /> : <Redirect to="/" />)}
  />
);

CPrivateRoute.propTypes = propTypes;

const mapStateToProps = ({ Auth }) => ({
  isAuthorized: Auth.isAuthorized,
});

export const PrivateRoute = compose(
  inject(mapStateToProps),
)(CPrivateRoute);
