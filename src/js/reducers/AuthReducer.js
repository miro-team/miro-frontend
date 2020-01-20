import { createReducer } from 'redux-act';
import * as actions from 'js/actions/AuthActions';
import { Map } from 'immutable';


const initialState = Map({
  isAuthorized: false,
});

const AuthReducer = createReducer(
  {
    [actions.setAuthStatus]: state => state.set('isAuthorized', true),
    [actions.unsetAuthStatus]: state => state.set('isAuthorized', false),
  },
  initialState,
);

export default AuthReducer;
