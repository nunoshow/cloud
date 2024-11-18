export default {
  async fetch(request) {
    const url = new URL(request.url);
    return fetch(request, {
      headers: {
        'Content-Type': 'text/html',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  }
}
