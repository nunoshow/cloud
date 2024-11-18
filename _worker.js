export default {
  async fetch(request) {
    const url = new URL(request.url);
    const response = await fetch(url.toString(), {
      method: request.method,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600'
      }
    });
    return response;
  }
}
