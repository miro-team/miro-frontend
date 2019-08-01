import axios from 'axios';
import Cookies from 'js-cookie';


class AuthService {

    constructor() {
        let JWT = this.getJWT();
        this._subscribeRequestsWithJWT(JWT);
    }

    _subscribeRequestsWithJWT(token) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
        }
    }

    _unsubscribeRequestsWithJWT() {
        delete axios.defaults.headers.common['Authorization'];
    }

    isRequestsSubscribed() {
        return axios.defaults.headers.common['Authorization'] ? true : false;
    }

    setJWT(token) {
        Cookies.set('JWT', token)
        this._subscribeRequestsWithJWT(token);
    }

    unsetJWT() {
        Cookies.remove('JWT');
        this._unsubscribeRequestsWithJWT();
    }

    getJWT() {
        return Cookies.get('JWT');
    }

    getJWTFromURL() {
        return window.location.href.split('?token=')[1] || undefined;
    }

    setJWTFromURL() {
        let token = this.getJWTFromURL();
        if(token) {
            this.setJWT(token);
        }
    }
}


export default new AuthService();
