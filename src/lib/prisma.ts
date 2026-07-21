import dns from "dns";
import { PrismaClient } from "@prisma/client";

// Supabase direct connection domain resolves only to IPv6.
// For local networks (e.g. Jio, Airtel, home routers) that do not support IPv6 routing,
// we override DNS to resolve to the official Supabase IPv4 connection pooler gateway IP (ap-south-1) dynamically.
try {
  const originalLookup = dns.lookup;
  dns.lookup = function (hostname: string, options: any, callback: any) {
    if (hostname === "db.ywyyxzvuqrwrrmsovzkk.supabase.co") {
      const cb = typeof options === "function" ? options : callback;
      
      // Dynamically resolve the IPv4 pooler gateway domain to get a valid IPv4 address
      return originalLookup("aws-0-ap-south-1.pooler.supabase.com", { family: 4 }, (err, address, family) => {
        if (err || !address) {
          // Fallback to hardcoded verified pooler IPv4 if DNS lookup fails
          return cb(null, "3.108.251.216", 4);
        }
        return cb(null, address, family);
      });
    }
    return originalLookup(hostname, options, callback);
  } as any;
} catch (dnsErr) {
  console.warn("DNS override failed:", dnsErr);
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
