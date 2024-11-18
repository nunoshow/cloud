export default {
  async fetch(request) {
    const url = new URL(request.url);
    const response = await fetch(url.toString(), {
      cf: {
        cacheTtl: 3600,
        cacheEverything: true
      }
    });
    
    const content = await response.text();
    return new Response(content, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }
}
