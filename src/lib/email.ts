import nodemailer from "nodemailer";
import { Resend } from "resend";

interface EmailPayload {
  name: string;
  phone: string;
  email: string;
  city: string;
  preferredArea: string;
  budget: string;
  flatType: string;
  tenantType: string;
  moveInDate: string;
  additionalRequirements?: string;
  createdAt: Date;
}

export async function sendEnquiryEmail(data: EmailPayload) {
  const ownerEmail = process.env.OWNER_EMAIL || "supportgharsathi@gmail.com";
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "Asia/Kolkata",
  }).format(data.createdAt);

  const subject = "🏠 New Rental Enquiry | GharSathi";

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background-color: #2563eb; padding: 24px 32px; text-align: left;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">GharSathi</h1>
              <p style="color: #dbeafe; margin: 4px 0 0 0; font-size: 13px; font-weight: 500;">Smart Rental Requirement Platform</p>
            </td>
          </tr>

          <!-- Content Title -->
          <tr>
            <td style="padding: 32px 32px 16px 32px;">
              <h2 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111827;">New Rental Enquiry Received</h2>
              <p style="margin: 0; font-size: 14px; color: #4b5563;">A new customer has submitted their rental requirement through GharSathi.</p>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding: 0 32px 16px 32px;">
              <div style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e5e7eb; padding: 20px;">
                <h3 style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb;">Customer Details</h3>
                <table width="100%" cellspacing="0" cellpadding="4">
                  <tr>
                    <td width="35%" style="font-size: 13px; color: #6b7280; font-weight: 500;">Name:</td>
                    <td width="65%" style="font-size: 14px; color: #111827; font-weight: 600;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500;">Phone:</td>
                    <td style="font-size: 14px; color: #111827; font-weight: 600;"><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500;">Email:</td>
                    <td style="font-size: 14px; color: #111827; font-weight: 600;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Rental Details -->
          <tr>
            <td style="padding: 0 32px 16px 32px;">
              <div style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e5e7eb; padding: 20px;">
                <h3 style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #16a34a;">Rental Requirements</h3>
                <table width="100%" cellspacing="0" cellpadding="4">
                  <tr>
                    <td width="35%" style="font-size: 13px; color: #6b7280; font-weight: 500;">City:</td>
                    <td width="65%" style="font-size: 14px; color: #111827; font-weight: 600;">${data.city}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500;">Preferred Area:</td>
                    <td style="font-size: 14px; color: #111827; font-weight: 600;">${data.preferredArea}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500;">Budget:</td>
                    <td style="font-size: 14px; color: #111827; font-weight: 600;">₹${data.budget} / month</td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500;">Flat Type:</td>
                    <td style="font-size: 14px; color: #111827; font-weight: 600;">${data.flatType}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500;">Tenant Type:</td>
                    <td style="font-size: 14px; color: #111827; font-weight: 600;">${data.tenantType}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500;">Move-in Date:</td>
                    <td style="font-size: 14px; color: #111827; font-weight: 600;">${data.moveInDate}</td>
                  </tr>
                  ${
                    data.additionalRequirements
                      ? `
                  <tr>
                    <td style="font-size: 13px; color: #6b7280; font-weight: 500; vertical-align: top;">Notes:</td>
                    <td style="font-size: 14px; color: #374151;">${data.additionalRequirements}</td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>
            </td>
          </tr>

          <!-- Footer Metadata -->
          <tr>
            <td style="padding: 16px 32px 32px 32px; text-align: center; border-top: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">Submitted At: ${formattedDate}</p>
              <p style="margin: 6px 0 0 0; font-size: 12px; color: #9ca3af;">© ${new Date().getFullYear()} GharSathi. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const textContent = `
New Rental Enquiry Received

Customer Details
----------------
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Rental Details
--------------
City: ${data.city}
Preferred Area: ${data.preferredArea}
Budget: ${data.budget}
Flat Type: ${data.flatType}
Tenant Type: ${data.tenantType}
Move-in Date: ${data.moveInDate}
Additional Requirements: ${data.additionalRequirements || "None"}

Submitted At: ${formattedDate}
  `.trim();

  console.log("==========================================");
  console.log("🏠 NEW RENTAL ENQUIRY RECEIVED | GHARSATHI");
  console.log(textContent);
  console.log("==========================================");

  // 1. Try Resend if API key is set
  if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.startsWith("re_")) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "GharSathi <onboarding@resend.dev>",
        to: [ownerEmail],
        subject,
        html: htmlContent,
        text: textContent,
      });
      console.log(`[Resend] Email successfully dispatched to ${ownerEmail}`);
      return;
    } catch (resendError) {
      console.warn("[Resend Error] Falling back to Nodemailer SMTP:", resendError);
    }
  }

  // 2. Try Nodemailer SMTP if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"GharSathi" <${process.env.SMTP_USER}>`,
        to: ownerEmail,
        subject,
        html: htmlContent,
        text: textContent,
      });
      console.log(`[Nodemailer] Email successfully dispatched to ${ownerEmail}`);
      return;
    } catch (smtpError) {
      console.warn("[Nodemailer Error] Could not send via SMTP:", smtpError);
    }
  }
}
