import axios from 'axios';
import { takeLatest, call, delay, select, put } from 'redux-saga/effects';

import API from 'Api';
import processFilters from 'js/utils/processFilters';

import * as AppActions from 'js/actions/AppActions';
import * as UIActions from 'js/actions/UIActions';


export class FilterSaga {

    static * getFilteredData(action) {

        yield put(UIActions.activateScheduleGridPreloader());

        if (action.payload && action.payload.issuer !== 'SET_SCHEDULEGRID_PAGE') yield put(UIActions.resetScheduleGridPage());

        const filterValues = yield select(state => state.Filters.toJS());
        const pageNum = yield select(state => state.UI.get('scheduleGridActivePage'));
        const pageSize = yield select(state => state.UI.get('scheduleGridPageSize'));
        const filters = processFilters(filterValues, pageNum, pageSize);

        try {
            const filteredData = yield call(axios, {
                url: API.data() + filters.urlParams
            });
            yield put(AppActions.getScheduleSuccess(filteredData.data));
            yield put(UIActions.deactivateScheduleGridPreloader());
        } 
        catch (e) {
            yield put(AppActions.getScheduleFail());
            yield put(UIActions.deactivateScheduleGridPreloader());
        }
    }

    static * makeRequest(action) {
        yield put(AppActions.getScheduleRequest({ issuer: action.type }));
    }
}

export function* saga() {
    yield takeLatest(action => action.type.slice(-7) === '_FILTER' || action.type === 'SET_SCHEDULEGRID_PAGE' || action.type === 'RESET_FILTERS', FilterSaga.makeRequest);
    yield takeLatest(AppActions.getScheduleRequest, FilterSaga.getFilteredData);
}
