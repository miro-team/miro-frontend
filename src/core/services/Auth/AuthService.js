import Cookies from 'js-cookie';

import { HTTP } from '../HTTP';


class CAuthService {
  constructor({ tokenPrefix, cookieKey }) {
    this.tokenPrefix = tokenPrefix;
    this.cookieKey = cookieKey;
    const token = this.getToken();
    this.subscribeRequestsWithToken(token);
  }

  subscribeRequestsWithToken = (token) => {
    if (token) {
      HTTP.setToken(`${this.tokenPrefix} ${token}`);
    }
  };

  unsubscribeRequests = () => {
    HTTP.unsetToken();
  };

  setToken(token) {
    Cookies.set(this.cookieKey, token);
    this.subscribeRequestsWithToken(token);
  }

  unsetToken() {
    Cookies.remove(this.cookieKey);
    this.unsubscribeRequests();
  }

  getToken = () => Cookies.get(this.cookieKey);

  getTokenFromURL = () => window.location.href.split('?token=')[1] || undefined;

  setTokenFromURL() {
    const token = this.getTokenFromURL();
    if (token) {
      this.setToken(token);
    }
  }
}

export const AuthService = new CAuthService({ tokenPrefix: 'Bearer', cookieKey: 'JWT' });
