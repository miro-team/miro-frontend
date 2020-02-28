import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { DropdownActions } from '../actions';


const initialState = Map({
  isOpened: false,
});

export const DropdownReducer = createReducer(
  {
    [DropdownActions.show]: state => state.set('isOpened', true),
    [DropdownActions.hide]: state => state.set('isOpened', false),
  },
  initialState,
);
