import { createAction } from 'redux-act';


export default {
  loginRequest: createAction('LOGIN_REQUEST'),
  loginSuccess: createAction('LOGIN_SUCCESS'),
  loginFail: createAction('LOGIN_FAIL'),

  logoutRequest: createAction('LOGOUT_REQUEST'),
  logoutSuccess: createAction('LOGOUT_SUCCESS'),
  logoutFail: createAction('LOGOUT_FAIL'),

  unsetAuthStatus: createAction('UNSET_AUTH_STATUS'),
  setAuthStatus: createAction('SET_AUTH_STATUS'),
};
