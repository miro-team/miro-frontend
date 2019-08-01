import { combineReducers } from 'redux';

import { AppReducer } from './AppReducer';
import { UIStateReducer } from './UIStateReducer';
import { FilterReducer } from './FilterReducer';
import { DataReducer } from './DataReducer';
import { AuthReducer } from './AuthReducer';
import { ScheduleReducer } from './ScheduleReducer';


const reducers = combineReducers({
    App: AppReducer,
    UI: UIStateReducer,
    Filters: FilterReducer,
    Data: DataReducer,
    Auth: AuthReducer,
    Schedule: ScheduleReducer
});

export default reducers;
