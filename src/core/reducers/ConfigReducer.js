import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { ConfigActions } from 'core/actions';


const initialState = Map({
  rooms: [],
  disciplines: [],
  weekDays: [],
  roomTypes: [],
  teachers: [],
  groups: [],
  schemes: [],
  periodicities: [],
  eventTypes: [],
  pairs: [],
});

export const ConfigReducer = createReducer(
  {
    [ConfigActions.getConfigSuccess]: (state, payload) => state.mergeDeep(payload),
  },
  initialState,
);
