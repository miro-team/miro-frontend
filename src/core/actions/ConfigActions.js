import { createAction } from 'redux-act';


export default {
  getConfigRequest: createAction('GET_CONFIG_REQUEST'),
  getConfigSuccess: createAction('GET_CONFIG_SUCCESS'),
  getConfigFail: createAction('GET_CONFIG_FAIL'),
};
