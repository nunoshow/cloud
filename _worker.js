export default {
  async fetch(request) {
    const url = new URL(request.url);
    return fetch(url.toString());
  }
}
