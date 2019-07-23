import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'Api';

import * as AppActions from 'js/actions/AppActions';


export class MappingSaga {

    static * getMappingData(action) {

        try {
            const mapData = yield call(axios, {
                url: API.mapping()
            });
            yield put(AppActions.getMappingSuccess(mapData.data));
        } 
        catch (msg) {
            yield put(AppActions.getMappingFail());
            console.error(msg)
        }
    }
}

export function* saga() {
    yield takeLatest('GET_MAP_REQUEST', MappingSaga.getMappingData);
}
