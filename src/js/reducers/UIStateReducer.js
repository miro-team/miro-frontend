import { createReducer } from 'redux-act';
import * as actions from 'js/actions/UIActions';
import { Map } from 'immutable';


const initialState = Map({
  activeFiltersTab: 0,
  isMobileSidebarOpened: false,
  isDropdownOpened: false,
});

const UIStateReducer = createReducer(
  {
    [actions.setFiltersTab]: (state = initialState, payload) => state.set('activeFiltersTab', payload),

    [actions.openMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', true),
    [actions.hideMobileSidebar]: (state = initialState) => state.set('isMobileSidebarOpened', false),

    [actions.openDropdown]: (state = initialState) => state.set('isDropdownOpened', true),
    [actions.hideDropdown]: (state = initialState) => state.set('isDropdownOpened', false),
  },
  initialState,
);

export default UIStateReducer;
