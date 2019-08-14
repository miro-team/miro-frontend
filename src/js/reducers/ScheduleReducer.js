import { createReducer } from 'redux-act';
import * as actions from 'js/actions/ScheduleActions';
import { Map } from 'immutable';


const initialState = Map({
  gridActivePage: 1,
  gridPageSize: 6,
  isGridPreloaderActive: false,
});

const ScheduleReducer = createReducer(
  {
    [actions.setGridPage]: (state = initialState, payload) => state.set('gridActivePage', payload),
    [actions.resetGridPage]: (state = initialState) => state.set('gridActivePage', 1),
    [actions.activateGridPreloader]: (state = initialState) => state.set('isGridPreloaderActive', true),
    [actions.deactivateGridPreloader]: (state = initialState) => state.set('isGridPreloaderActive', false),
  },
  initialState,
);

export default ScheduleReducer;
