import { createReducer } from 'redux-act';
import * as actions from 'js/actions/AuthActions';
import { Map } from 'immutable';


const initialState = Map({
    isAuthorized: null
});


export const AuthReducer = createReducer({
    [actions.setAuthStatus]: (state = initialState) => {
        return state.set('isAuthorized', true);
    },
    [actions.unsetAuthStatus]: (state = initialState) => {
        return state.set('isAuthorized', false);
    },
}, initialState);
