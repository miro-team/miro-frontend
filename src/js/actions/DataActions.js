import { createAction } from 'redux-act';


export const getScheduleRequest = createAction('GET_SCHEDULE_REQUEST');
export const getScheduleSuccess = createAction('GET_SCHEDULE_SUCCESS');
export const getScheduleFail = createAction('GET_SCHEDULE_FAIL');

export const getMapRequest = createAction('GET_MAP_REQUEST');
export const getMapSuccess = createAction('GET_MAP_SUCCESS');
export const getMapFail = createAction('GET_MAP_FAIL');
