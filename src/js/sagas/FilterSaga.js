import axios from 'axios';
import { takeLatest, call, delay, select, put } from 'redux-saga/effects';

import API from 'Api';
import makeFilterUrlParams from 'js/utils/makeFilterUrlParams';
import convertDate from 'js/utils/convertDate';

import * as DataActions from 'js/actions/DataActions';
import * as UIActions from 'js/actions/UIActions';


export class FilterSaga {

    static * getFilteredData(action) {

        yield put(DataActions.getScheduleRequest());

        const filterReducerNames = ['building', 'floor', 'roomType', 'roomCapacity', 'roomNumber', 'resType', 'date', 'weekType', 'weekDay', 'pair'];
        let filters = {};
        for (let filter of filterReducerNames) {
            filters[filter] = yield select(state => state.Filters.get(filter));
        }

        if (action.type !== 'SET_SCHEDULEGRID_PAGE') yield put(UIActions.resetScheduleGridPage());
        
        const pageNum = yield select(state => state.UI.get('scheduleGridActivePage'));
        const pageSize = yield select(state => state.UI.get('scheduleGridPageSize'));
        
        filters.resType !== 1 ? delete filters.date : filters.date = convertDate(filters.date); // For Calendar
        delete filters.resType; // Currently not needed

        const urlParams = makeFilterUrlParams(filters, pageNum, pageSize);

        console.log(urlParams);

        try {

            const filteredData = yield call(axios, {
                url: API.data() + urlParams
            });

            yield put(DataActions.getScheduleSuccess(filteredData.data));

        } catch (msg) {
            yield put(DataActions.getScheduleFail());
            console.error(msg)
        }
    }
}

export function* saga() {
    yield takeLatest(action => action.type.slice(-7) === '_FILTER' || action.type === 'SET_SCHEDULEGRID_PAGE', FilterSaga.getFilteredData);
}
