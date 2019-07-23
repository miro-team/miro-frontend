import { createReducer } from 'redux-act';
import * as AppActions from 'js/actions/AppActions';
import { Map } from 'immutable';


const initialState = Map({
    scheduleData: {},
    mapping: {}
});

export const AppReducer = createReducer({
    [AppActions.getScheduleSuccess]: (state = initialState, payload) => state.set('scheduleData', payload),
    [AppActions.getScheduleFail]: (state = initialState, payload) => state.set('scheduleData', payload),
    [AppActions.getMappingSuccess]: (state = initialState, payload) => state.set('mapping', payload)
}, initialState)
