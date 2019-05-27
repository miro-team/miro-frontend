import { createReducer } from 'redux-act';
import * as DataActions from 'js/actions/DataActions';
import { Map } from 'immutable';


const initialState = Map({
    data: [{}]
});

export const DataReducer = createReducer({
    [DataActions.setData]: (state = initialState, payload) => state.set('data', payload)
}, initialState)
