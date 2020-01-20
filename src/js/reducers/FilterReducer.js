import { createReducer } from 'redux-act';
import * as actions from 'js/actions/FilterActions';
import { Map } from 'immutable';


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

const FilterReducer = createReducer(
  {
    [actions.setSchemeFilter]: (state, payload) => state.set('scheme', +payload),
    [actions.setBuildingFilter]: (state, payload) => state.set('building', +payload),
    [actions.setFloorFilter]: (state, payload) => state.set('floor', +payload),
    [actions.setRoomTypeFilter]: (state, payload) => state.set('roomType', +payload),
    [actions.setRoomCapacityFilter]: (state, payload) => state.set('roomCapacity', payload),
    [actions.setRoomNumberFilter]: (state, payload) => state.set('roomNumber', +payload),

    [actions.setEventTypeFilter]: (state, payload) => state.set('eventType', payload),
    [actions.setDateFilter]: (state, payload) => state.set('date', payload),
    [actions.setPeriodicityFilter]: (state, payload) => state.set('periodicity', +payload),
    [actions.setWeekDayFilter]: (state, payload) => state.set('weekDay', +payload),
    [actions.setPairFilter]: (state, payload) => state.set('pair', +payload),

    [actions.resetFilters]: () => initialState,
  },
  initialState,
);

export default FilterReducer;
