import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import * as AppActions from 'js/actions/AppActions';
import * as AuthActions from 'js/actions/AuthActions';


const initialState = Map({
  filters: {},
  process: '',
});

const AppReducer = createReducer(
  {
    [AppActions.getConfigSuccess]: (state, payload) => state.set('filters', payload.filters),

    [AuthActions.loginRequest]: state => state.set('process', 'login'),
    [AuthActions.loginSuccess]: state => state.set('process', ''),
    [AuthActions.loginFail]: state => state.set('process', ''),
  },
  initialState,
);

export default AppReducer;
