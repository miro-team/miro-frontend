import { createAction } from 'redux-act';


export const getScheduleRequest = createAction('GET_SCHEDULE_REQUEST');
export const getScheduleSuccess = createAction('GET_SCHEDULE_SUCCESS');
export const getScheduleFail = createAction('GET_SCHEDULE_FAIL');
