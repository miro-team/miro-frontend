import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const mapStateToProps = ({ Auth }) => ({
  isAuthorized: Auth.get('isAuthorized'),
});

@connect(mapStateToProps)
class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.any.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    isAllowed: PropTypes.bool,
  };

  static defaultProps = {
    isAllowed: true,
  };

  render() {
    const { component: PrivateComponent, isAuthorized, isAllowed = true, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (isAllowed && isAuthorized ? <PrivateComponent {...props} /> : <Redirect to="/" />)
        }
      />
    );
  }
}

export default PrivateRoute;
