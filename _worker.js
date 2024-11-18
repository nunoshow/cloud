export default {
  async fetch(request) {
    const url = new URL(request.url);
    return fetch(request, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }
}
