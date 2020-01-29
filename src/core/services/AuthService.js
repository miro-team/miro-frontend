import axios from 'axios';
import Cookies from 'js-cookie';


class AuthService {
  constructor() {
    const JWT = this.getJWT();
    this.subscribeRequestsWithJWT(JWT);
  }

  subscribeRequestsWithJWT = (token) => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  };

  unsubscribeRequestsWithJWT = () => {
    delete axios.defaults.headers.common.Authorization;
  };

  isRequestsSubscribed = () => !!axios.defaults.headers.common.Authorization;

  setJWT(token) {
    Cookies.set('JWT', token);
    this.subscribeRequestsWithJWT(token);
  }

  unsetJWT() {
    Cookies.remove('JWT');
    this.unsubscribeRequestsWithJWT();
  }

  getJWT = () => Cookies.get('JWT');

  getJWTFromURL = () => window.location.href.split('?token=')[1] || undefined;

  setJWTFromURL() {
    const token = this.getJWTFromURL();
    if (token) {
      this.setJWT(token);
    }
  }
}

export default new AuthService();
