import type { NextConfig } from "next";

/**
 * Senior Security Engineering HTTP Security Headers Configuration
 * Target: Next.js 16 (App Router) + Vercel Deployment Compatibility
 */

const securityHeaders = [
  // 1. Content Security Policy (CSP)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' blob: data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  // 2. X-Frame-Options (Protects against Clickjacking framing)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // 3. X-Content-Type-Options (Prevents MIME-type sniffing exploits)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 4. Referrer-Policy (Protects privacy and prevents sensitive referrer leakage)
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 5. Permissions-Policy (Disables unnecessary browser capabilities and restricts permissions)
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "serial=()",
      "accelerometer=()",
      "gyroscope=()",
      "magnetometer=()",
      "clipboard-read=(self)",
      "clipboard-write=(self)",
      "fullscreen=(self)",
    ].join(", "),
  },
  // Additional Hardening
  // Strict-Transport-Security (HSTS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Cross-Origin-Opener-Policy
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  // Cross-Origin-Resource-Policy
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  // X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  // Explicitly set turbopack root to project root directory for Vercel builds
  turbopack: {
    root: __dirname,
  },

  // Remove X-Powered-By header revealing implementation details
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
