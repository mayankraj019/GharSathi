import { sendEnquiryEmail } from "./src/lib/email";

async function testEmail() {
  console.log("Testing sendEnquiryEmail...");
  try {
    await sendEnquiryEmail({
      name: "Mayank Raj",
      phone: "9771919191",
      email: "mayankrafiganj19@gmail.com",
      city: "pune",
      preferredArea: "kothrud",
      budget: "20000",
      flatType: "2BHK",
      tenantType: "Student (Boys)",
      moveInDate: "31/07/2026",
      additionalRequirements: "no",
      createdAt: new Date(),
    });
    console.log("Email test completed.");
  } catch (err: any) {
    console.error("EMAIL ERROR:", err);
  }
}

testEmail();
