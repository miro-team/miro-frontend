import { combineReducers } from 'redux';

import { UIStateReducer } from './UIStateReducer';
import { FilterReducer } from './FilterReducer';


const reducers = combineReducers({
    UI: UIStateReducer,
    Filters: FilterReducer
})

export default reducers
