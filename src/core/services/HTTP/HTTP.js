import superagent from 'superagent';


class IHTTP {
  post = async () => 'post';

  get = async () => 'get';

  put = async () => 'put';

  patch = async () => 'patch';

  delete = async () => 'delete';
}

export class CHTTP extends IHTTP {
  constructor({ httpService }) {
    super();
    this.token = null;
    this.http = httpService;
  }

  post = ({ url, data, headers, params }) => new Promise((resolve, reject) => {
    this.http
      .post(url, data)
      .use(this.tokenPlugin)
      .set(headers || {})
      .query(params)
      .end(this.handleEnd({ resolve, reject }));
  })

  get = ({ url, data, headers, params }) => new Promise((resolve, reject) => {
    this.http
      .get(url, data)
      .use(this.tokenPlugin)
      .set(headers || {})
      .query(params)
      .end(this.handleEnd({ resolve, reject }));
  })

  put = ({ url, data, headers, params }) => new Promise((resolve, reject) => {
    this.http
      .put(url, data)
      .use(this.tokenPlugin)
      .set(headers || {})
      .query(params)
      .end(this.handleEnd({ resolve, reject }));
  })

  patch = ({ url, data, headers, params }) => new Promise((resolve, reject) => {
    this.http
      .patch(url, data)
      .use(this.tokenPlugin)
      .set(headers || {})
      .query(params)
      .end(this.handleEnd({ resolve, reject }));
  })

  delete = ({ url, data, headers, params }) => new Promise((resolve, reject) => {
    this.http
      .del(url, data)
      .use(this.tokenPlugin)
      .set(headers || {})
      .query(params)
      .end(this.handleEnd({ resolve, reject }));
  })

  handleEnd = ({ resolve, reject }) => (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        data: res.body,
        meta: {
          ...res,
          ...{
            body: undefined,
          },
        },
      });
    }
  }

  tokenPlugin = (req) => {
    if (this.token) {
      req.set('Authorization', this.token);
    }
  }

  setToken = (token) => {
    this.token = token;
  }

  unsetToken = () => {
    this.token = null;
  }
}


export const HTTP = new CHTTP({ httpService: superagent });
