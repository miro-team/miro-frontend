import { createAction } from 'redux-act';


export default {
  setFiltersTab: createAction('SET_FILTERS_TAB'),

  openMobileSidebar: createAction('OPEN_MOBILE_SIDEBAR'),
  hideMobileSidebar: createAction('HIDE_MOBILE_SIDEBAR'),
};
