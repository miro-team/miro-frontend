import { createReducer } from 'redux-act';
import * as FilterActions from 'js/actions/FilterActions';
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
    [FilterActions.setBuildingFilter]: (state = initialState, payload) => state.set('building', payload),
    [FilterActions.setFloorFilter]: (state = initialState, payload) => state.set('floor', payload),
    [FilterActions.setRoomTypeFilter]: (state = initialState, payload) => state.set('roomType', payload),
    [FilterActions.setRoomCapacityFilter]: (state = initialState, payload) => state.set('roomCapacity', payload),
    [FilterActions.setRoomNumberFilter]: (state = initialState, payload) => state.set('roomNumber', payload),
    [FilterActions.setResTypeFilter]: (state = initialState, payload) => state.set('resType', payload),
    [FilterActions.setDateFilter]: (state = initialState, payload) => state.set('date', payload),
    [FilterActions.setWeekTypeFilter]: (state = initialState, payload) => state.set('weekType', payload),
    [FilterActions.setWeekDayFilter]: (state = initialState, payload) => state.set('weekDay', payload),
    [FilterActions.setPairFilter]: (state = initialState, payload) => state.set('pair', payload)
}, initialState)
