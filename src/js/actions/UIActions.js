import { createAction } from 'redux-act';


export const setFiltersTab = createAction('SET_FILTERS_TAB');

export const setScheduleGridPage = createAction('SET_SCHEDULEGRID_PAGE');
export const resetScheduleGridPage = createAction('RESET_SCHEDULEGRID_PAGE');
export const activateScheduleGridPreloader = createAction('ACTIVATE_SCHEDULEGRID_PRELOADER');
export const deactivateScheduleGridPreloader = createAction('DEACTIVATE_SCHEDULEGRID_PRELOADER');

export const openMobileSidebar = createAction('OPEN_MOBILE_SIDEBAR');
export const hideMobileSidebar = createAction('HIDE_MOBILE_SIDEBAR');

export const openDropdown = createAction('OPEN_DROPDOWN');
export const hideDropdown = createAction('HIDE_DROPDOWN');
