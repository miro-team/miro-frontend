import { createReducer } from 'redux-act';
import * as actions from 'js/actions/FilterActions';
import { Map } from 'immutable';


const initialState = Map({
    building: '',
    floor: '',
    roomType: '',
    roomCapacity: '',
    roomNumber: '',
    resType: 0,
    date: new Date(),
    weekType: '',
    weekDay: '',
    pair: ''
});

export const FilterReducer = createReducer({
    [actions.setBuildingFilter]: (state = initialState, payload) => state.set('building', payload),
    [actions.setFloorFilter]: (state = initialState, payload) => state.set('floor', payload),
    [actions.setRoomTypeFilter]: (state = initialState, payload) => state.set('roomType', payload),
    [actions.setRoomCapacityFilter]: (state = initialState, payload) => state.set('roomCapacity', payload),
    [actions.setRoomNumberFilter]: (state = initialState, payload) => state.set('roomNumber', payload),

    [actions.setResTypeFilter]: (state = initialState, payload) => state.set('resType', payload),
    [actions.setDateFilter]: (state = initialState, payload) => state.set('date', payload),
    [actions.setWeekTypeFilter]: (state = initialState, payload) => state.set('weekType', payload),
    [actions.setWeekDayFilter]: (state = initialState, payload) => state.set('weekDay', payload),
    [actions.setPairFilter]: (state = initialState, payload) => state.set('pair', payload),

    [actions.resetFilters]: () => initialState
}, initialState);
