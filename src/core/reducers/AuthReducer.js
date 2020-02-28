import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { AuthActions } from 'core/actions';


const initialState = Map({
  isAuthorized: false,
});

export const AuthReducer = createReducer(
  {
    [AuthActions.setAuthStatus]: state => state.set('isAuthorized', true),
    [AuthActions.unsetAuthStatus]: state => state.set('isAuthorized', false),
  },
  initialState,
);
