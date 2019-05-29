import { createReducer } from 'redux-act';
import * as DataActions from 'js/actions/DataActions';
import { Map } from 'immutable';


const initialState = Map({
    resultData: {},
    roomData: {}
});

export const DataReducer = createReducer({
    [DataActions.setResultData]: (state = initialState, payload) => state.set('resultData', payload),
    [DataActions.setRoomData]: (state = initialState, payload) => state.set('roomData', payload)
}, initialState)
