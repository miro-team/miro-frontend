import { createAction } from 'redux-act';


export default {
  getUserRequest: createAction('GET_USER_REQUEST'),
  getUserSuccess: createAction('GET_USER_SUCCESS'),
  getUserFail: createAction('GET_USER_FAIL'),
};
