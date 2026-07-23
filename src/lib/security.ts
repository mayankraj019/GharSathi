/**
 * Security helper utilities for GharSathi
 */

/**
 * Safely escape HTML characters to prevent XSS and HTML / Email Injection.
 */
export function escapeHtml(str: string | null | undefined): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Extracts the real client IP address from request headers, handling reverse proxies (Vercel, Cloudflare, Nginx).
 */
export function getClientIp(req: Request): string {
  const headers = req.headers;

  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(",")[0].trim();
    if (firstIp) return firstIp;
  }

  const xRealIp = headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  return "127.0.0.1";
}

/**
 * Validates whether the incoming request originated from the expected site host or same origin.
 */
export function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const host = req.headers.get("host");

  if (!origin && !referer) {
    // If no origin or referer present, allow same-origin serverless invocations but flag missing headers in production if needed
    return true;
  }

  if (origin) {
    try {
      const originUrl = new URL(origin);
      if (host && originUrl.host === host) return true;
      if (originUrl.hostname === "localhost" || originUrl.hostname === "127.0.0.1") return true;
      if (originUrl.hostname.endsWith(".vercel.app") || originUrl.hostname === "gharsathi.com") return true;
    } catch {
      return false;
    }
  }

  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (host && refererUrl.host === host) return true;
      if (refererUrl.hostname === "localhost" || refererUrl.hostname === "127.0.0.1") return true;
      if (refererUrl.hostname.endsWith(".vercel.app") || refererUrl.hostname === "gharsathi.com") return true;
    } catch {
      return false;
    }
  }

  return false;
}
