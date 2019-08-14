import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';

import API from 'Api';

import * as AuthActions from 'js/actions/AuthActions';
import * as UserActions from 'js/actions/UserActions';


export class UserSaga {
  static* getUser() {
    const isAuthorized = yield select(state => state.Auth.get('isAuthorized'));

    try {
      const response = yield call(axios, {
        method: 'GET',
        url: API.user(),
      });

      yield put(UserActions.getUserSuccess(response.data));

      if (!isAuthorized) {
        yield put(AuthActions.setAuthStatus());
      }
    } catch (e) {
      yield put(UserActions.getUserFail());
      if (isAuthorized) {
        yield put(AuthActions.unsetAuthStatus());
      }
    }
  }
}

export function* saga() {
  yield takeEvery(UserActions.getUserRequest, UserSaga.getUser);
}
