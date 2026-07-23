import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rentalRequirementSchema } from "@/lib/validations";
import { sendEnquiryEmail } from "@/lib/email";
import { getClientIp, isSameOrigin } from "@/lib/security";
import { checkRateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  try {
    // 1. Anti-CSRF / Origin Check
    if (!isSameOrigin(req)) {
      return NextResponse.json(
        {
          success: false,
          error: "Untrusted origin or cross-site request forbidden.",
        },
        { status: 403 }
      );
    }

    // 2. IP Rate Limiting Guard (5 requests per 10 minutes)
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp, {
      windowMs: 10 * 60 * 1000,
      max: 5,
    });

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many submissions from this IP. Please try again in ${Math.ceil(
            rateLimit.resetSeconds / 60
          )} minutes.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.resetSeconds),
            "X-RateLimit-Limit": String(rateLimit.limit),
            "X-RateLimit-Remaining": String(rateLimit.remaining),
          },
        }
      );
    }

    const body = await req.json();

    // 3. Server-side Zod validation with upper bounds & trimming
    const validationResult = rentalRequirementSchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      console.warn("Validation failed for request from IP:", clientIp, formattedErrors);
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check all fields.",
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 4. Save to Prisma database
    const record = await prisma.rentalRequests.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
        preferredArea: data.preferredArea,
        budget: data.budget,
        flatType: data.flatType,
        tenantType: data.tenantType,
        moveInDate: data.moveInDate,
        additionalRequirements: data.additionalRequirements || null,
      },
    });

    // 5. Await email dispatch with sanitized inputs
    try {
      await sendEnquiryEmail({
        name: data.name,
        phone: data.phone,
        email: data.email,
        city: data.city,
        preferredArea: data.preferredArea,
        budget: data.budget,
        flatType: data.flatType,
        tenantType: data.tenantType,
        moveInDate: data.moveInDate,
        additionalRequirements: data.additionalRequirements || "",
        createdAt: record.createdAt || new Date(),
      });
    } catch (emailErr) {
      console.error("Email send error (non-fatal):", emailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your rental requirement has been submitted successfully.",
        id: record.id,
      },
      {
        status: 201,
        headers: {
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error: any) {
    // Internal server logging (full error context hidden from external client)
    console.error("Error processing rental request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
