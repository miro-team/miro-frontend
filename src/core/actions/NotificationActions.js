import { createAction } from 'redux-act';


export default {
  setNotification: createAction('SET_NOTIFICATION'),
  clearNotification: createAction('CLEAR_NOTIFICATION'),
  clearAllNotifications: createAction('CLEAR_ALL_NOTIFICATIONS'),
};
