import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ConfigActions from 'js/actions/ConfigActions';
import * as ScheduleActions from 'js/actions/ScheduleActions';
import * as UserActions from 'js/actions/UserActions';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getSchedule() {
    dispatch(ScheduleActions.getScheduleRequest());
  },
  getConfig() {
    dispatch(ConfigActions.getConfigRequest());
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

    getUser();
    getConfig();
    getSchedule();

    setInterval(() => {
      getUser();
    }, 30000);
  }

  render() {
    return <></>;
  }
}

export default Effects;
