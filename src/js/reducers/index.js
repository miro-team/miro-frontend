import { combineReducers } from 'redux';

import { UIStateReducer } from './UIStateReducer';
import { FilterReducer } from './FilterReducer';
import { AppReducer } from './AppReducer';


const reducers = combineReducers({
    UI: UIStateReducer,
    Filters: FilterReducer,
    App: AppReducer
})

export default reducers
