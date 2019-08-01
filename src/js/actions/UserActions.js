import { createAction } from 'redux-act';


export const getUserRequest = createAction('GET_USER_REQUEST');
export const getUserSuccess = createAction('GET_USER_SUCCESS');
export const getUserFail = createAction('GET_USER_FAIL');
