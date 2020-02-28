import { createAction } from 'redux-act';


export const DropdownActions = {
  show: createAction('SHOW_DROPDOWN'),
  hide: createAction('HIDE_DROPDOWN'),
};
