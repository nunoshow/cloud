export default {
  async fetch(request) {
    return fetch(request.url, {
      method: request.method,
      headers: request.headers
    });
  }
}
