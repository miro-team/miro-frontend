import { createAction } from 'redux-act';


export default {
  setSchemeFilter: createAction('SET_SCHEME_FILTER'),
  setBuildingFilter: createAction('SET_BUILDING_FILTER'),
  setFloorFilter: createAction('SET_FLOOR_FILTER'),
  setRoomTypeFilter: createAction('SET_ROOMTYPE_FILTER'),
  setRoomCapacityFilter: createAction('SET_ROOMCAPACITY_FILTER'),
  setRoomNumberFilter: createAction('SET_ROOMNUMBER_FILTER'),
  setEventTypeFilter: createAction('SET_EVENTTYPE_FILTER'),
  setDateFilter: createAction('SET_DATE_FILTER'),
  setPeriodicityFilter: createAction('SET_PERIODICITY_FILTER'),
  setWeekDayFilter: createAction('SET_WEEKDAY_FILTER'),
  setPairFilter: createAction('SET_PAIR_FILTER'),
  resetFilters: createAction('RESET_FILTERS'),
};
