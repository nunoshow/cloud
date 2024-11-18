export default {
  async fetch(request) {
    const url = new URL(request.url);
    return fetch(request, {
      cf: {
        cacheEverything: true,
        cacheTtl: 3600
      }
    });
  }
}
