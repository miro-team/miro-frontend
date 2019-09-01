import { createReducer } from 'redux-act';
import * as actions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
  activeFiltersTab: 0,
  isMobileSidebarOpened: false,
  isDropdownOpened: true,

  isModalOpened: false,
  modalType: 'room',
  modalOptions: { title: 'Просмотр аудитории' },
});

const UIReducer = createReducer(
  {
    [actions.setFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload),

    [actions.openMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', true),
    [actions.hideMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', false),

    [actions.openDropdown]: (state = initialState) => state.set('isDropdownOpened', true),
    [actions.hideDropdown]: (state = initialState) => state.set('isDropdownOpened', false),

    [actions.showModal]: (state = initialState, payload = {}) => state
      .set('isModalOpened', true)
      .set('modalType', payload.type)
      .set('modalOptions', payload.options),
    [actions.hideModal]: (state = initialState) => state
      .set('isModalOpened', false)
      .set('modalType', null)
      .set('modalOptions', null),
  },
  initialState,
);

export default UIReducer;
