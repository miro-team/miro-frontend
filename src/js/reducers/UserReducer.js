import { createReducer } from 'redux-act';
import * as actions from 'js/actions/UserActions';
import {Map} from 'immutable';

import * as actions from 'js/actions/UserActions';


const initialState = Map({
    login: '',
    role: ''
});


export const UserReducer = createReducer({
    [actions.getUserSuccess]: (state, payload) => {
        return state.set('login', payload.login)
                    .set('role', payload.role);
    },
    [actions.getUserFail]: (state) => {
        return initialState
    }
}, initialState);
