import { createReducer } from 'redux-act';
import * as UIActions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
    activeFiltersTab: 0
});

export const UIStateReducer = createReducer({
    [UIActions.changeFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload.tabID)
}, initialState)
