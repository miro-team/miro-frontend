import { createReducer } from 'redux-act';
import * as actions from 'js/actions/UIActions';
import { Map } from 'immutable';


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
    [actions.setFiltersTab]: (state, payload) => state.set('activeFiltersTab', payload),

    [actions.openMobileSidebar]: state => state.set('isMobileSidebarOpened', true),
    [actions.hideMobileSidebar]: state => state.set('isMobileSidebarOpened', false),

    [actions.showDropdown]: state => state.set('isDropdownOpened', true),
    [actions.hideDropdown]: state => state.set('isDropdownOpened', false),

    [actions.showModal]: (state, payload = {}) => state
      .set('isModalOpened', true)
      .set('modalType', payload.type)
      .set('modalOptions', payload.options),
    [actions.hideModal]: state => state
      .set('isModalOpened', false)
      .set('modalType', null)
      .set('modalOptions', null),
  },
  initialState,
);

export default UIReducer;
