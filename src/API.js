class CAPI {
  constructor() {
    this.host = 'http://62.109.25.2:2200';
    this.prefix = `${this.host}/api`;
  }

  filterSingle() {
    return `${this.prefix}/filter/single`;
  }

  filterCycle() {
    return `${this.prefix}/filter/cycle`;
  }

  config() {
    return `${this.prefix}/config`;
  }

  user() {
    return `${this.prefix}/user`;
  }

  login() {
    return `${this.host}/oauth/token`;
  }
}

export const API = new CAPI();
