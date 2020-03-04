import React, { Component } from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { ConfigActions, ScheduleActions, UserActions } from 'core/actions';


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
