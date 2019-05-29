import { createReducer } from 'redux-act';
import * as UIActions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
    activeFiltersTab: 0,
    resultGridActivePage: 1,
    resultGridPageSize: 9
});

export const UIStateReducer = createReducer({
    [UIActions.setFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload),
    [UIActions.setResultGridPage]: (state = initialState, payload) => state.set('resultGridActivePage', payload)
}, initialState)
