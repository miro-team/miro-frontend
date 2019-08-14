import { createReducer } from 'redux-act';
import * as actions from 'js/actions/AuthActions';
import { Map } from 'immutable';


const initialState = Map({
  isAuthorized: false,
});

const AuthReducer = createReducer(
  {
    [actions.setAuthStatus]: (state = initialState) => state.set('isAuthorized', true),
    [actions.unsetAuthStatus]: (state = initialState) => state.set('isAuthorized', false),
  },
  initialState,
);

export default AuthReducer;
