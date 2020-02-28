import { createAction } from 'redux-act';


export const ModalActions = {
  show: createAction('SHOW_MODAL'),
  hide: createAction('HIDE_MODAL'),
};
