export default {
  async fetch(request) {
    const url = new URL(request.url);
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}

