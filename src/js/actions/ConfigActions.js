import { createAction } from 'redux-act';


export const getConfigRequest = createAction('GET_CONFIG_REQUEST');
export const getConfigSuccess = createAction('GET_CONFIG_SUCCESS');
export const getConfigFail = createAction('GET_CONFIG_FAIL');
