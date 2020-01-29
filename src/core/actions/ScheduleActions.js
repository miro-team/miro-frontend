import { createAction } from 'redux-act';


export default {
  setGridPage: createAction('SET_SCHEDULEGRID_PAGE'),
  resetGridPage: createAction('RESET_SCHEDULEGRID_PAGE'),

  showGridPreloader: createAction('SHOW_SCHEDULEGRID_PRELOADER'),
  hideGridPreloader: createAction('HIDE_SCHEDULEGRID_PRELOADER'),

  getScheduleRequest: createAction('GET_SCHEDULE_REQUEST'),
  getScheduleSuccess: createAction('GET_SCHEDULE_SUCCESS'),
  getScheduleFail: createAction('GET_SCHEDULE_FAIL'),
};
