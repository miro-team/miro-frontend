import axios from 'axios';
import { takeEvery, call, put, all, delay } from 'redux-saga/effects';

import API from 'Api';

import AuthService from 'js/services/AuthService';

import * as AuthActions from 'js/actions/AuthActions';
import * as UserActions from 'js/actions/UserActions';


export class AuthSaga {
  static* login(action) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: API.login(),
        data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      });
      AuthService.setJWT(response.data.token);

      yield delay(400);

      yield all([
        put(AuthActions.setAuthStatus()),
        put(AuthActions.loginSuccess()),
        put(UserActions.getUserRequest()),
      ]);
    } catch (e) {
      yield put(AuthActions.loginFail());
    }
  }

  static* logout() {
    try {
      yield call(axios, {
        method: 'POST',
        url: API.logout(),
      });
      AuthService.unsetJWT();

      yield delay(400);

      yield all([put(AuthActions.unsetAuthStatus()), put(AuthActions.logoutSuccess())]);
    } catch (e) {
      yield put(AuthActions.logoutFail());
    }
  }
}

export function* saga() {
  yield takeEvery(AuthActions.loginRequest, AuthSaga.login);
  yield takeEvery(AuthActions.logoutRequest, AuthSaga.logout);
}
