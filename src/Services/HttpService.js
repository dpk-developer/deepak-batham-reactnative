import { ApiEndPoints } from '../Contants';

let headers = {
  Accept: 'application/json',
  'Content-type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRwa2JhdGhhbTI0MTJAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2Rway1kZXZlbG9wZXIiLCJpYXQiOjE2NjIyOTgzMjQsImV4cCI6MTY2MjczMDMyNH0.q7jbpV1itDhEIYPwsGM1NpAfinCF0uzji9FN7-wfeB4',
};

const joinURL = (baseURL, url) => {
  return `${baseURL}/${url}`;
};

class HttpService {
  constructor() {
    this.domain = ApiEndPoints.BASE_URL;
  }

  request(url, method = 'POST', data = null) {
    url = joinURL(this.domain, url);

    const options = {
      headers,
      method,
    };

    if (data) {
      options.body = JSON.stringify({ ...data });
    }

    return fetch(url, options);
  }

  async get(url, id) {
    const method = 'GET';
    if (id) {
      url = `${url}/${id}`;
    }
    return await this.request(url, method).then((response) => response.json());
  }

  async post(url, data) {
    const method = 'POST';
    return await this.request(url, method, data).then((response) =>
      response.json(),
    );
  }
}

export default HttpService;
