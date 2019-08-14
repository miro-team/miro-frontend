class Api {
  constructor() {
    this.prefix = 'http://62.109.25.2:2200/api';
  }

  data() {
    return `${this.prefix}/filter/data`;
  }

  config() {
    return `${this.prefix}/config`;
  }

  login() {
    return `${this.prefix}/login`;
  }

  logout() {
    return `${this.prefix}/logout`;
  }

  user() {
    return `${this.prefix}/user`;
  }
}

export default new Api();
