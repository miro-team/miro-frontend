import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as AppActions from 'js/actions/AppActions';
import * as DataActions from 'js/actions/DataActions';
import * as UserActions from 'js/actions/UserActions';


const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = (dispatch) => ({
    getSchedule() {
        dispatch(DataActions.getScheduleRequest())
    },
    getConfig() {
        dispatch(AppActions.getConfigRequest())
    },
    getUser() {
        dispatch(UserActions.getUserRequest())
    }
});


@connect(mapStateToProps, mapDispatchToProps)
class Effects extends Component {

    componentDidMount() {
        const { getConfig, getSchedule, getUser } = this.props;

        getConfig();
        getSchedule();
        getUser();

        setInterval(() => { getUser() }, 10000);
    }

    render() {
        return (
            <></>
        )
    }
}


export default Effects;
