import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { ConfigActions } from 'core/actions';


const initialState = Map({
  eventTypes: [],
  groups: [],
  pairs: [],
  periodicities: [],
  roomTypes: [],
  rooms: [],
  schemes: [],
  weekDays: [],
});

const ConfigReducer = createReducer(
  {
    [ConfigActions.getConfigSuccess]: (state, payload) => state.mergeDeep(payload),
  },
  initialState,
);

export default ConfigReducer;
