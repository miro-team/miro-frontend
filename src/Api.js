class Api {
    constructor() {
        this.prefix = 'http://62.109.25.2:2200/filter'
    }
    
    data() {
        return `${this.prefix}/data`
    }
}

const API = new Api();

export default API;
