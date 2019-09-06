import { createAction } from 'redux-act';


export const setNotification = createAction('SET_NOTIFICATION');
export const clearNotification = createAction('CLEAR_NOTIFICATION');
export const clearAllNotifications = createAction('CLEAR_ALL_NOTIFICATIONS');
