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

const UIReducer = createReducer(
  {
    [UIActions.setFiltersTab]: (state, payload) => state.set('activeFiltersTab', payload),

    [UIActions.openMobileSidebar]: state => state.set('isMobileSidebarOpened', true),
    [UIActions.hideMobileSidebar]: state => state.set('isMobileSidebarOpened', false),

    [UIActions.showDropdown]: state => state.set('isDropdownOpened', true),
    [UIActions.hideDropdown]: state => state.set('isDropdownOpened', false),

    [UIActions.showModal]: (state, payload = {}) => state
      .set('isModalOpened', true)
      .set('modalType', payload.type)
      .set('modalOptions', payload.options),
    [UIActions.hideModal]: state => state
      .set('isModalOpened', false)
      .set('modalType', null)
      .set('modalOptions', null),
  },
  initialState,
);

export default UIReducer;
