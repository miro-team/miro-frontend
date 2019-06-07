import { createReducer } from 'redux-act';
import * as DataActions from 'js/actions/DataActions';
import { Map } from 'immutable';


const initialState = Map({
    scheduleData: {},
    mapping: {}
});

export const DataReducer = createReducer({
    [DataActions.getScheduleSuccess]: (state = initialState, payload) => state.set('scheduleData', payload),
    [DataActions.getScheduleFail]: (state = initialState, payload) => state.set('scheduleData', payload),
    [DataActions.getMapSuccess]: (state = initialState, payload) => state.set('mapping', payload)
}, initialState)
