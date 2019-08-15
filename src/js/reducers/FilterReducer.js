import { createReducer } from 'redux-act';
import * as actions from 'js/actions/FilterActions';
import { Map } from 'immutable';


const initialState = Map({
  building: 0,
  floor: 0,
  roomType: 0,
  roomCapacity: 0,
  roomNumber: '',
  eventType: 'single',
  date: new Date(),
  weekType: 1,
  weekDay: 0,
  pair: 0,
});

const FilterReducer = createReducer(
  {
    [actions.setBuildingFilter]: (state = initialState, payload) => state.set('building', payload),
    [actions.setFloorFilter]: (state = initialState, payload) => state.set('floor', payload),
    [actions.setRoomTypeFilter]: (state = initialState, payload) => state.set('roomType', payload),
    [actions.setRoomCapacityFilter]: (state = initialState, payload) => state.set('roomCapacity', payload),
    [actions.setRoomNumberFilter]: (state = initialState, payload) => state.set('roomNumber', payload),

    [actions.setEventTypeFilter]: (state = initialState, payload) => state.set('eventType', payload),
    [actions.setDateFilter]: (state = initialState, payload) => state.set('date', payload),
    [actions.setWeekTypeFilter]: (state = initialState, payload) => state.set('weekType', payload),
    [actions.setWeekDayFilter]: (state = initialState, payload) => state.set('weekDay', payload),
    [actions.setPairFilter]: (state = initialState, payload) => state.set('pair', payload),

    [actions.resetFilters]: () => initialState,
  },
  initialState,
);

export default FilterReducer;
