import axios from 'axios';
import { takeLatest, call, delay, select, put } from 'redux-saga/effects';

import API from 'Api';
import makeFilterUrlParams from 'js/utils/makeFilterUrlParams';

import * as DataActions from 'js/actions/DataActions';
import * as UIActions from 'js/actions/UIActions';


export class FilterSaga {
    static * getFilteredData() {

        const filterNames = ['building', 'floor', 'roomType', 'roomCapacity', 'roomNumber', 'resType', 'weekType', 'weekDay', 'pair'];
        let filters = {};
        for(let filter of filterNames){
            filters[filter] = yield select(state => state.Filters.get(filter));
        }

        const pageNum = yield select(state => state.UI.get('resultGridActivePage'));
        const pageSize = yield select(state => state.UI.get('resultGridPageSize'));
        
        const urlParams = makeFilterUrlParams(filters, pageNum, pageSize);

        try {
            const filteredData = yield call(axios, {
                url: API.data() + urlParams
            });
            yield put(DataActions.setResultData(filteredData.data));
            console.log(filteredData.data)
            
        } catch (msg) {
            console.error(msg)
        }
    }
    static * resetPage() {
        yield put(UIActions.setResultGridPage(1));
    }
}

export function* saga() {
    yield takeLatest(action => action.type.slice(-7) === '_FILTER' || action.type === 'SET_RESULTGRID_PAGE', FilterSaga.getFilteredData);
    yield takeLatest(action => action.type.slice(-7) === '_FILTER', FilterSaga.resetPage);
}
