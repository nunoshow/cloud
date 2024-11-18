export default {
  async fetch(request) {
    const url = new URL(request.url);
    return new Response(await fetch(url.toString(), {
      cf: {
        cacheTtl: 3600,
        cacheEverything: true
      }
    }));
  }
}

