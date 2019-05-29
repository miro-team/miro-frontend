import { combineReducers } from 'redux';

import { UIStateReducer } from './UIStateReducer';
import { FilterReducer } from './FilterReducer';
import { DataReducer } from './DataReducer';


const reducers = combineReducers({
    UI: UIStateReducer,
    Filters: FilterReducer,
    Data: DataReducer
})

export default reducers
