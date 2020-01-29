import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { UserActions } from 'core/actions';


const initialState = Map({
  username: '',
  role: '',
});

const UserReducer = createReducer(
  {
    [UserActions.getUserSuccess]: (state, payload) => state.set('username', payload.username).set('role', payload.role),
    [UserActions.getUserFail]: () => initialState,
  },
  initialState,
);

export default UserReducer;
