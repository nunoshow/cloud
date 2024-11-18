export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    return await fetch(`cloud-a56.pages.dev${url.pathname}${url.search}`, request);
  }
}
