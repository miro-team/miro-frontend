import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';

import API from 'Api';

import { AuthService } from 'core/services';

import { AuthActions, UserActions } from 'core/actions';


function* getUser() {
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
    if (AuthService.getJWT()) {
      // TODO: Remove this
      // AuthService.unsetJWT();
    }
  }
}


export default function* () {
  yield takeEvery(UserActions.getUserRequest, getUser);
}
