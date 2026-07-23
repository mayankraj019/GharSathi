import type { NextConfig } from "next";

/**
 * Hardened HTTP Security Headers Suite
 * Aligned with OWASP, NIST, and Next.js Production Security Guidelines
 */
const securityHeaders = [
  // 1. Content Security Policy (CSP) - Mitigates XSS, data injection, and unauthorized frame embedding
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' blob: data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  // 2. X-Frame-Options - Protects against Clickjacking and UI Redressing attacks
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // 3. X-Content-Type-Options - Prevents MIME-type sniffing exploits
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 4. Referrer-Policy - Protects user privacy and prevents sensitive path/query leakage
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 5. Permissions-Policy - Disables unneeded browser APIs, hardware access & tracking
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "browsing-topics=()",
      "payment=()",
      "autoplay=()",
      "display-capture=()",
      "accelerometer=()",
      "gyroscope=()",
      "magnetometer=()",
      "midi=()",
      "usb=()",
    ].join(", "),
  },
  // 6. Strict Transport Security (HSTS) - Enforces HTTPS connections for 2 years with preload support
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // 7. X-XSS-Protection - Legacy browser reflected XSS filter defense
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // 8. Cross-Origin-Opener-Policy - Protects against Spectre side-channel attacks
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  // 9. Cross-Origin-Resource-Policy - Prevents unauthorized cross-origin resource reads
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  // 10. X-DNS-Prefetch-Control - Controls DNS pre-fetching behavior
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  // Hide Server Information
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
