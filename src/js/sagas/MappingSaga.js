import axios from 'axios';
import { takeLatest, call, delay, select, put } from 'redux-saga/effects';

import API from 'Api';

import * as DataActions from 'js/actions/DataActions';
import * as UIActions from 'js/actions/UIActions';


export class MappingSaga {

    static * getMapData(action) {

        try {
            const mapData = yield call(axios, {
                url: API.mapping()
            });

            yield put(DataActions.getMapSuccess(mapData.data));

        } catch (msg) {
            yield put(DataActions.getMapFail());
            console.error(msg)
        }
    }
}

export function* saga() {
    yield takeLatest('GET_MAP_REQUEST', MappingSaga.getMapData);
}
