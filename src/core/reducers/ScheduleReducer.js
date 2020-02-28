import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { ScheduleActions } from 'core/actions';


const initialState = Map({
  gridActivePage: 1,
  gridPageSize: 8,
  isGridPreloaderActive: false,
  data: {},
});

export const ScheduleReducer = createReducer(
  {
    [ScheduleActions.setGridPage]: (state, payload) => state.set('gridActivePage', payload),
    [ScheduleActions.resetGridPage]: state => state.set('gridActivePage', 1),
    [ScheduleActions.showGridPreloader]: state => state.set('isGridPreloaderActive', true),
    [ScheduleActions.hideGridPreloader]: state => state.set('isGridPreloaderActive', false),

    [ScheduleActions.getScheduleSuccess]: (state, payload) => state.set('data', payload),
    [ScheduleActions.getScheduleFail]: state => state.set(initialState),
  },
  initialState,
);
