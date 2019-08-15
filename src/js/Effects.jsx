import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as AppActions from 'js/actions/AppActions';
import * as DataActions from 'js/actions/DataActions';
import * as UserActions from 'js/actions/UserActions';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getSchedule() {
    dispatch(DataActions.getScheduleRequest());
  },
  getConfig() {
    dispatch(AppActions.getConfigRequest());
  },
  getUser() {
    dispatch(UserActions.getUserRequest());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Effects extends Component {
  static propTypes = {
    getConfig: PropTypes.func.isRequired,
    getSchedule: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getConfig, getSchedule, getUser } = this.props;

    getConfig();
    getSchedule();
    getUser();

    setInterval(() => {
      getUser();
    }, 30000);
  }

  render() {
    return <></>;
  }
}

export default Effects;
