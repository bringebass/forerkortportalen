import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration - only create transporter if credentials are available
function getTransporter() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.office365.com", // Outlook/Office 365
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports (587 uses STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Alle påkrevde felt må fylles ut." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Ugyldig e-postadresse." },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    
    if (!transporter) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        {
          message: "E-post konfigurasjon mangler. Kontakt systemadministrator.",
        },
        { status: 500 }
      );
    }

    // Email addresses to send to
    const recipients = ["bringedal@dbinfo.no", "dahler@dbinfo.no"];

    // Sanitize subject for email
    const emailSubject = `Kontakt fra Førerkortportalen: ${subject}`;

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipients.join(", "),
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">Ny kontaktmelding fra Førerkortportalen</h2>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Navn:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>E-post:</strong> ${email}</p>
            ${phone ? `<p style="margin: 8px 0;"><strong>Telefon:</strong> ${phone}</p>` : ""}
            <p style="margin: 8px 0;"><strong>Emne:</strong> ${subject}</p>
          </div>
          <div style="border-top: 2px solid #e2e8f0; padding-top: 20px; margin-top: 20px;">
            <p style="font-weight: bold; color: #1e293b; margin-bottom: 10px;">Melding:</p>
            <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Melding sendt!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      {
        message: error.message?.includes("Invalid login") 
          ? "E-post konfigurasjon er feil. Kontakt systemadministrator."
          : "Vi klarte ikke å sende meldingen akkurat nå. Prøv igjen om litt.",
      },
      { status: 500 }
    );
  }
}

