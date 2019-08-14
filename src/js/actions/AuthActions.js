import { createAction } from 'redux-act';


export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFail = createAction('LOGIN_FAIL');

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const logoutFail = createAction('LOGOUT_FAIL');

export const unsetAuthStatus = createAction('UNSET_AUTH_STATUS');
export const setAuthStatus = createAction('SET_AUTH_STATUS');
