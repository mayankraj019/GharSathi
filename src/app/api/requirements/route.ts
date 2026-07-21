import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rentalRequirementSchema } from "@/lib/validations";
import { sendEnquiryEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Server-side Zod validation
    const validationResult = rentalRequirementSchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      console.warn("Validation failed for request:", formattedErrors);
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

    // Save to Prisma database
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

    // Send email notification safely in background without blocking response
    try {
      sendEnquiryEmail({
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
      }).catch((err) => console.error("Async email dispatch catch:", err));
    } catch (emailErr) {
      console.error("Non-blocking email send error:", emailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your rental requirement has been submitted successfully.",
        id: record.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating rental request:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
