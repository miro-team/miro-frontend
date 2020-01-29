import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { AuthActions } from 'core/actions';


const initialState = Map({
  process: '',
});

const AppReducer = createReducer(
  {
    [AuthActions.loginRequest]: state => state.set('process', 'login'),
    [AuthActions.loginSuccess]: state => state.set('process', ''),
    [AuthActions.loginFail]: state => state.set('process', ''),
  },
  initialState,
);

export default AppReducer;
