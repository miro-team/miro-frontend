import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as actions from 'js/actions/NotificationActions';


const initialState = Map({
  login: {},
});

const NotificationReducer = createReducer(
  {
    [actions.setNotification]: (state = initialState, payload) => {
      const { module, type, message } = payload;
      if (!state.has(module)) {
        return state;
      }
      return state.set(module, { type, message });
    },
    [actions.clearNotification]: (state = initialState, payload) => {
      const module = payload;
      if (!state.has(module)) {
        return state;
      }
      return state.set(module, {});
    },
    [actions.clearAllNotifications]: () => initialState,
  },
  initialState,
);

export default NotificationReducer;
