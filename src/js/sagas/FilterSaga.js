import axios from 'axios';
import { takeLatest, call, delay, select, put } from 'redux-saga/effects';

import API from 'Api';
import processFilters from 'js/utils/processFilters';
import { reduxFiltersToApi } from 'js/constants/spec';

import * as DataActions from 'js/actions/DataActions';
import * as UIActions from 'js/actions/UIActions';


export class FilterSaga {

    static * getFilteredData(action) {

        console.log(action)

        yield put(UIActions.activateScheduleGridPreloader());

        if (action.payload && action.payload.issuer !== 'SET_SCHEDULEGRID_PAGE') yield put(UIActions.resetScheduleGridPage());

        const filterReducerNames = Object.keys(reduxFiltersToApi);
        let filterValues = {};
        for (let filter of filterReducerNames) {
            filterValues[filter] = yield select(state => state.Filters.get(filter));
        }

        const pageNum = yield select(state => state.UI.get('scheduleGridActivePage'));
        const pageSize = yield select(state => state.UI.get('scheduleGridPageSize'));

        const filters = processFilters(filterValues, pageNum, pageSize);

        if (!filters.isAnyFilterActive) {
            yield delay(400);
            yield put(DataActions.getScheduleFail({ message: 'Не выбрано ни одного фильтра' }));
            yield put(UIActions.deactivateScheduleGridPreloader());
            return;
        }

        try {
            const filteredData = yield call(axios, {
                url: API.data() + filters.urlParams
            });

            yield put(DataActions.getScheduleSuccess({ data: filteredData.data }));
            
            yield put(UIActions.deactivateScheduleGridPreloader());

        } catch (e) {
            yield put(DataActions.getScheduleFail({ message: e.message }));
        }
    }

    static * makeRequest(action) {
        yield put(DataActions.getScheduleRequest({issuer: action.type}));
    }
}

export function* saga() {
    yield takeLatest(action => (action.type.slice(-7) === '_FILTER' &&  action.type !== 'SET_RESTYPE_FILTER') || action.type === 'SET_SCHEDULEGRID_PAGE' || action.type === 'RESET_FILTERS', FilterSaga.makeRequest);
    yield takeLatest(DataActions.getScheduleRequest, FilterSaga.getFilteredData);
}
