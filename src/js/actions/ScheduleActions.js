import { createAction } from 'redux-act';


export const setGridPage = createAction('SET_SCHEDULEGRID_PAGE');
export const resetGridPage = createAction('RESET_SCHEDULEGRID_PAGE');
export const showGridPreloader = createAction('SHOW_SCHEDULEGRID_PRELOADER');
export const hideGridPreloader = createAction('HIDE_SCHEDULEGRID_PRELOADER');

export const getScheduleRequest = createAction('GET_SCHEDULE_REQUEST');
export const getScheduleSuccess = createAction('GET_SCHEDULE_SUCCESS');
export const getScheduleFail = createAction('GET_SCHEDULE_FAIL');
