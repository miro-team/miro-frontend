import { createReducer } from 'redux-act';
import * as actions from 'js/actions/AppActions';
import { Map } from 'immutable';


const initialState = Map({
    config: null
});

export const AppReducer = createReducer({
    [actions.getConfigSuccess]: (state = initialState, payload) => state.set('config', payload)
}, initialState);
