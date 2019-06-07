class Api {
    constructor() {
        this.prefix = 'http://62.109.25.2:2200'
    }
    
    data() {
        return `${this.prefix}/filter/data`
    }

    mapping() {
        return `${this.prefix}/mapping`
    }
}

const API = new Api();

export default API;
