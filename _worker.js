export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const response = await fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
      return response;
    } catch (e) {
      return new Response(`${e.message}`, { status: 500 });
    }
  }
}

