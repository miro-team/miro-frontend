import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { ModalActions } from '../actions';


const initialState = Map({
  isOpened: true,
  type: 'room',
  title: 'Просмотр аудитории',
  options: {},
});

export const ModalReducer = createReducer(
  {
    [ModalActions.show]: (state, payload = {}) => state
      .set('isOpened', true)
      .set('type', payload.type)
      .set('title', payload.title)
      .set('options', payload.options),
    [ModalActions.hide]: state => state
      .set('isOpened', false)
      .set('type', null)
      .set('title', null)
      .set('options', null),
  },
  initialState,
);
