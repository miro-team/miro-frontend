import { createReducer } from 'redux-act';
import * as actions from 'js/actions/AppActions';
import { Map } from 'immutable';


const initialState = Map({
  filters: {},
});

const AppReducer = createReducer(
  {
    [actions.getConfigSuccess]: (state = initialState, payload) => state.set('filters', payload.filters),
  },
  initialState,
);

export default AppReducer;
