export default {
  async fetch(request) {
    const url = new URL(request.url);
    return fetch(request, {
      cf: {
        minify: {
          html: true,
          css: true,
          js: true
        }
      }
    });
  }
}
