import { observable, action } from 'mobx';
import qs from 'qs';

import { NotificationModel } from 'features/Notification';
import { AppModel } from 'core/models';
import { DropdownModel } from 'features/Dropdown/models';
import { PreloaderModel } from 'features/Preloader/models';

import { API } from 'API';
import { sleep } from 'utils';
import { AuthService, HTTP } from 'core/services';


class CAuthModel {
  @observable isAuthorized = false;

  @action setAuthStatus = () => {
    this.isAuthorized = true;
  }

  @action unsetAuthStatus = () => {
    this.isAuthorized = false;
  }

  @observable username = null;

  @observable fullname = null;

  @action login = async (username, password) => {
    try {
      AppModel.addProcess('login');

      const response = await HTTP.post({
        url: API.login(),
        headers: {
          Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
          grant_type: 'password',
          username,
          password,
        }),
      });

      AuthService.setToken(response.data.access_token);
      await this.getUser();
      this.setAuthStatus();

      DropdownModel.hide();
      await sleep(100);
      DropdownModel.show();
    } catch (e) {
      console.error(e.message);
    } finally {
      AppModel.removeProcess('login');
    }
  }

  @action logout = async () => {
    try {
      DropdownModel.hide();

      AuthService.unsetToken();
      this.unsetAuthStatus();
      this.username = null;
      this.fullname = null;

      await sleep(100);
      DropdownModel.show();
    } catch (e) {
      //
    }
  }

  @action getUser = async () => {
    try {
      const response = await HTTP.get({
        url: API.user(),
      });

      const { username, fullname } = response.data;

      this.username = username;
      this.fullname = fullname;

      if (!this.isAuthorized) {
        this.setAuthStatus();
      }
    } catch (e) {
      if (this.isAuthorized) {
        this.logout();
      }
    } finally {
      if (PreloaderModel.isDisplayed) {
        await sleep(2500);
        PreloaderModel.hide();
      }
    }
  }
}

export const AuthModel = new CAuthModel();
