import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { UserActions } from 'core/actions';


const initialState = Map({
  username: '',
  fullname: '',
});

export const UserReducer = createReducer(
  {
    [UserActions.getUserSuccess]: (state, payload) => state.set('username', payload.username).set('fullname', payload.fullname),
    [UserActions.getUserFail]: () => initialState,
  },
  initialState,
);
