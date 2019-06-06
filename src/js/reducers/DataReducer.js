import { createReducer } from 'redux-act';
import * as DataActions from 'js/actions/DataActions';
import { Map } from 'immutable';


const initialState = Map({
    scheduleData: {}
});

export const DataReducer = createReducer({
    [DataActions.getScheduleSuccess]: (state = initialState, payload) => state.set('scheduleData', payload)
}, initialState)
