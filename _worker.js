export default {
  async fetch(request) {
    return fetch(request, {
      cf: {
        cacheEverything: true,
        cacheTtl: 3600
      }
    });
  }
}
