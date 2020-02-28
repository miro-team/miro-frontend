import { createReducer } from 'redux-act';
import { Map } from 'immutable';

import { UIActions } from 'core/actions';


const initialState = Map({
  activeFiltersTab: 0,
  isMobileSidebarOpened: false,
  isDropdownOpened: false,

  isModalOpened: false,
  modalType: 'room',
  modalOptions: { title: 'Просмотр аудитории' },
});

export const UIReducer = createReducer(
  {
    [UIActions.setFiltersTab]: (state, payload) => state.set('activeFiltersTab', payload),

    [UIActions.openMobileSidebar]: state => state.set('isMobileSidebarOpened', true),
    [UIActions.hideMobileSidebar]: state => state.set('isMobileSidebarOpened', false),
  },
  initialState,
);
