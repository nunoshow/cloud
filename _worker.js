export default {
  async fetch(request, env) {
    const KV = env.REDIS
    const url = new URL(request.url)
    
    // Try to get cached response
    const cached = await KV.get(url.pathname)
    if (cached) return new Response(cached)
    
    // Get fresh response
    const response = await fetch(url.toString(), {
      method: request.method,
      headers: request.headers
    })
    
    // Cache the response
    const text = await response.text()
    await KV.put(url.pathname, text, {expirationTtl: 3600})
    
    return new Response(text, response)
  }
}
