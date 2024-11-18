export default {
  async fetch(request) {
    return new Response(null, {
      status: 302,
      headers: {
        'Location': request.url,
        'Cache-Control': 'no-cache'
      }
    });
  }
}
