export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      return await fetch(request);
    } catch (e) {
      return new Response(`${e.message}`, { status: 500 });
    }
  }
}
