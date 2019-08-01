import { createReducer } from 'redux-act';
import * as actions from 'js/actions/DataActions';
import { Map } from 'immutable';


const initialState = Map({
    scheduleData: {}
});

export const DataReducer = createReducer({
    [actions.getScheduleSuccess]: (state = initialState, payload) => state.set('scheduleData', payload),
    [actions.getScheduleFail]: (state = initialState, payload) => state.set('scheduleData', payload)
}, initialState);
