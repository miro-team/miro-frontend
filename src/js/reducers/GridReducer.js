import { createReducer } from 'redux-act';
import * as GridActions from 'js/actions/GridActions';
import { Map } from 'immutable';


const initialState = Map({
    mainGridActivePage: 1,
    mainGridDisplayCount: 9
});

export const GridReducer = createReducer({
    [GridActions.setMainGridPage]: (state = initialState, payload) => state.set('mainGridActivePage', payload)
}, initialState)
