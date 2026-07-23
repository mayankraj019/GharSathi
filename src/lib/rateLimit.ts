/**
 * In-memory sliding window rate limiter for API routes.
 */

interface RateLimitStore {
  [key: string]: number[];
}

const store: RateLimitStore = {};

// Clean up old entries every 5 minutes to prevent memory growth
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes
    for (const ip in store) {
      store[ip] = store[ip].filter((time) => now - time < windowMs);
      if (store[ip].length === 0) {
        delete store[ip];
      }
    }
  }, 5 * 60 * 1000);
}

export interface RateLimitOptions {
  windowMs?: number; // Time window in milliseconds (default: 10 mins)
  max?: number;      // Max requests allowed per window (default: 5)
}

export function checkRateLimit(
  ip: string,
  options: RateLimitOptions = {}
): { success: boolean; limit: number; remaining: number; resetSeconds: number } {
  const windowMs = options.windowMs || 10 * 60 * 1000;
  const max = options.max || 5;
  const now = Date.now();

  if (!store[ip]) {
    store[ip] = [];
  }

  // Filter timestamps within the current sliding window
  store[ip] = store[ip].filter((timestamp) => now - timestamp < windowMs);

  const requestCount = store[ip].length;

  if (requestCount >= max) {
    const oldestTimestamp = store[ip][0] || now;
    const resetMs = windowMs - (now - oldestTimestamp);
    return {
      success: false,
      limit: max,
      remaining: 0,
      resetSeconds: Math.ceil(resetMs / 1000),
    };
  }

  store[ip].push(now);

  return {
    success: true,
    limit: max,
    remaining: max - store[ip].length,
    resetSeconds: Math.ceil(windowMs / 1000),
  };
}
