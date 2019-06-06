import { createReducer } from 'redux-act';
import * as UIActions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
    activeFiltersTab: 0,
    scheduleGridActivePage: 1,
    scheduleGridPageSize: 9
});

export const UIStateReducer = createReducer({
    [UIActions.setFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload),
    [UIActions.setScheduleGridPage]: (state = initialState, payload) => state.set('scheduleGridActivePage', payload),
    [UIActions.resetScheduleGridPage]: (state = initialState, payload) => state.set('scheduleGridActivePage', 1)
}, initialState)
