import { createAction } from 'redux-act';


export const setSchemeFilter = createAction('SET_SCHEME_FILTER');
export const setBuildingFilter = createAction('SET_BUILDING_FILTER');
export const setFloorFilter = createAction('SET_FLOOR_FILTER');
export const setRoomTypeFilter = createAction('SET_ROOMTYPE_FILTER');
export const setRoomCapacityFilter = createAction('SET_ROOMCAPACITY_FILTER');
export const setRoomNumberFilter = createAction('SET_ROOMNUMBER_FILTER');

export const setEventTypeFilter = createAction('SET_EVENTTYPE_FILTER');
export const setDateFilter = createAction('SET_DATE_FILTER');
export const setPeriodicityFilter = createAction('SET_PERIODICITY_FILTER');
export const setWeekDayFilter = createAction('SET_WEEKDAY_FILTER');
export const setPairFilter = createAction('SET_PAIR_FILTER');

export const resetFilters = createAction('RESET_FILTERS');
