import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import API from 'Api';

import * as AppActions from 'js/actions/AppActions';


export class AppSaga {

    static * getConfig(action) {

        try {
            const response = yield call(axios, {
                method: 'GET',
                url: API.config()
            });
            yield put(AppActions.getConfigSuccess(response.data));
        } 
        catch (e) {
            yield put(AppActions.getConfigFail());
        }
    }
}

export function* saga() {
    yield takeLatest(AppActions.getConfigRequest, AppSaga.getConfig);
}
