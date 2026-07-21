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
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
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

    // Send email notification to owner (background async so user response is fast)
    sendEnquiryEmail({
      ...data,
      createdAt: record.createdAt,
    }).catch((err) => console.error("Async email dispatch error:", err));

    return NextResponse.json(
      {
        success: true,
        message: "Your rental requirement has been submitted successfully.",
        id: record.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating rental request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
