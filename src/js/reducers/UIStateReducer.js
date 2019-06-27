import { createReducer } from 'redux-act';
import * as UIActions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
    activeFiltersTab: 0,
    scheduleGridActivePage: 1,
    scheduleGridPageSize: 9,
    isScheduleGridPreloaderActive: false,
    isMobileSidebarOpened: null
});

export const UIStateReducer = createReducer({
    [UIActions.setFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload),

    [UIActions.setScheduleGridPage]: (state = initialState, payload) => state.set('scheduleGridActivePage', payload),
    [UIActions.resetScheduleGridPage]: (state = initialState) => state.set('scheduleGridActivePage', 1),
    [UIActions.activateScheduleGridPreloader]: (state = initialState) => state.set('isScheduleGridPreloaderActive', true),
    [UIActions.deactivateScheduleGridPreloader]: (state = initialState) => state.set('isScheduleGridPreloaderActive', false),

    [UIActions.openMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', true),
    [UIActions.closeMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', false)
}, initialState)
