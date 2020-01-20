import { createReducer } from 'redux-act';
import * as actions from 'js/actions/ScheduleActions';
import { Map } from 'immutable';


const initialState = Map({
  gridActivePage: 1,
  gridPageSize: 8,
  isGridPreloaderActive: false,
  data: {},
});

const ScheduleReducer = createReducer(
  {
    [actions.setGridPage]: (state, payload) => state.set('gridActivePage', payload),
    [actions.resetGridPage]: state => state.set('gridActivePage', 1),
    [actions.showGridPreloader]: state => state.set('isGridPreloaderActive', true),
    [actions.hideGridPreloader]: state => state.set('isGridPreloaderActive', false),

    [actions.getScheduleSuccess]: (state, payload) => state.set('data', payload),
    [actions.getScheduleFail]: state => state.set(initialState),
  },
  initialState,
);

export default ScheduleReducer;
