export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url)
      const KV = env.REDIS
      
      // Simple fetch and return
      const response = await fetch(url.toString(), {
        method: request.method,
        headers: request.headers
      })
      
      return response
    } catch (error) {
      return new Response('Site is loading...', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    }
  }
}

