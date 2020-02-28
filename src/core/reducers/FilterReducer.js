import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { FilterActions } from 'core/actions';


const initialState = Map({
  scheme: -1,
  building: -1,
  floor: -1,
  roomType: -1,
  roomCapacity: '',
  roomNumber: -1,
  eventType: 'single',
  date: new Date(),
  periodicity: -1,
  weekDay: -1,
  pair: -1,
});

export const FilterReducer = createReducer(
  {
    [FilterActions.setSchemeFilter]: (state, payload) => state.set('scheme', +payload),
    [FilterActions.setBuildingFilter]: (state, payload) => state.set('building', +payload),
    [FilterActions.setFloorFilter]: (state, payload) => state.set('floor', +payload),
    [FilterActions.setRoomTypeFilter]: (state, payload) => state.set('roomType', +payload),
    [FilterActions.setRoomCapacityFilter]: (state, payload) => state.set('roomCapacity', payload),
    [FilterActions.setRoomNumberFilter]: (state, payload) => state.set('roomNumber', +payload),

    [FilterActions.setEventTypeFilter]: (state, payload) => state.set('eventType', payload),
    [FilterActions.setDateFilter]: (state, payload) => state.set('date', payload),
    [FilterActions.setPeriodicityFilter]: (state, payload) => state.set('periodicity', +payload),
    [FilterActions.setWeekDayFilter]: (state, payload) => state.set('weekDay', +payload),
    [FilterActions.setPairFilter]: (state, payload) => state.set('pair', +payload),

    [FilterActions.resetFilters]: () => initialState,
  },
  initialState,
);
