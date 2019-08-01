import { createAction } from 'redux-act';


export const setGridPage = createAction('SET_SCHEDULEGRID_PAGE');
export const resetGridPage = createAction('RESET_SCHEDULEGRID_PAGE');
export const activateGridPreloader = createAction('ACTIVATE_SCHEDULEGRID_PRELOADER');
export const deactivateGridPreloader = createAction('DEACTIVATE_SCHEDULEGRID_PRELOADER');
