import { createReducer } from 'redux-act';
import * as UIActions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
    activeFiltersTab: 0,
    scheduleGridActivePage: 1,
    scheduleGridPageSize: 6,
    isScheduleGridPreloaderActive: false,
    isMobileSidebarOpened: false,
    isDropdownOpened: false
});

export const UIStateReducer = createReducer({
    [UIActions.setFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload),

    [UIActions.setScheduleGridPage]: (state = initialState, payload) => state.set('scheduleGridActivePage', payload),
    [UIActions.resetScheduleGridPage]: (state = initialState) => state.set('scheduleGridActivePage', 1),
    [UIActions.activateScheduleGridPreloader]: (state = initialState) => state.set('isScheduleGridPreloaderActive', true),
    [UIActions.deactivateScheduleGridPreloader]: (state = initialState) => state.set('isScheduleGridPreloaderActive', false),

    [UIActions.openMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', true),
    [UIActions.hideMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', false),

    [UIActions.openDropdown]: (state = initialState) => state.set('isDropdownOpened', true),
    [UIActions.hideDropdown]: (state = initialState) => state.set('isDropdownOpened', false),
}, initialState)
