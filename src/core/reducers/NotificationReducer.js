import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { NotificationActions } from 'core/actions';


const initialState = Map({
  login: {},
});

export const NotificationReducer = createReducer(
  {
    [NotificationActions.setNotification]: (state, payload) => {
      const { module, type, message } = payload;
      if (!state.has(module)) {
        return state;
      }
      return state.set(module, { type, message });
    },
    [NotificationActions.clearNotification]: (state, payload) => {
      const module = payload;
      if (!state.has(module)) {
        return state;
      }
      return state.set(module, {});
    },
    [NotificationActions.clearAllNotifications]: () => initialState,
  },
  initialState,
);
