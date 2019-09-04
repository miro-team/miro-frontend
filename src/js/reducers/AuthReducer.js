import { createReducer } from 'redux-act';
import * as actions from 'js/actions/AuthActions';
import { Map } from 'immutable';


const initialState = Map({
  isAuthorized: true,
});

const AuthReducer = createReducer(
  {
    [actions.setAuthStatus]: (state = initialState) => state.set('isAuthorized', true),
    [actions.unsetAuthStatus]: (state = initialState) => state.set('isAuthorized', true),
  },
  initialState,
);

export default AuthReducer;
