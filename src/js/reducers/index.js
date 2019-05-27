import { combineReducers } from 'redux';

import { UIStateReducer } from './UIStateReducer';
import { FilterReducer } from './FilterReducer';
import { GridReducer } from './GridReducer';
import { DataReducer } from './DataReducer';


const reducers = combineReducers({
    UI: UIStateReducer,
    Filters: FilterReducer,
    Grids: GridReducer,
    Data: DataReducer
})

export default reducers
