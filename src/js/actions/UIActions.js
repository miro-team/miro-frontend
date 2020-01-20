import { createAction } from 'redux-act';


export const setFiltersTab = createAction('SET_FILTERS_TAB');

export const openMobileSidebar = createAction('OPEN_MOBILE_SIDEBAR');
export const hideMobileSidebar = createAction('HIDE_MOBILE_SIDEBAR');

export const showDropdown = createAction('SHOW_DROPDOWN');
export const hideDropdown = createAction('HIDE_DROPDOWN');

export const showModal = createAction('SHOW_MODAL');
export const hideModal = createAction('HIDE_MODAL');
