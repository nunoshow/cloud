import { Redis } from '@upstash/redis'

export default {
  async fetch(request, env) {
    const redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    })

    const url = new URL(request.url)
    const key = `page:${url.pathname}`
    
    // Get page data from Redis
    const pageData = await redis.get(key)
    if (pageData) {
      return new Response(pageData, {
        headers: { 'Content-Type': 'text/html' }
      })
    }

    return fetch(url.toString())
  }
}

