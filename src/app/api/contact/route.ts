import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration - only create transporter if credentials are available
function getTransporter() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  // Remove spaces from app password if present
  const password = process.env.SMTP_PASS.replace(/\s/g, '');

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com", // Gmail (works better than Outlook with Security Defaults)
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports (587 uses STARTTLS)
    requireTLS: true, // Force TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: password,
    },
    tls: {
      // Don't reject unauthorized certificates (some orgs use self-signed)
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
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

    // Verify connection before sending
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError: any) {
      console.error("SMTP verification failed:", {
        code: verifyError.code,
        command: verifyError.command,
        message: verifyError.message,
        response: verifyError.response,
      });
      throw verifyError;
    }

    // Email addresses to send to
    const recipients = ["bringedal@dbinfo.no", "dahler@dbinfo.no"];

    // Sanitize subject for email
    const emailSubject = `Kontakt fra Førerkortportalen: ${subject}`;

    // Use SMTP_USER as from address to match authenticated user
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;

    // Email content
    const mailOptions = {
      from: fromAddress,
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
    // Detailed error logging for debugging
    console.error("Failed to send contact email - Full error:", {
      code: error.code,
      command: error.command,
      message: error.message,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack,
      smtpHost: process.env.SMTP_HOST || "smtp.office365.com",
      smtpUser: process.env.SMTP_USER ? `${process.env.SMTP_USER.substring(0, 3)}***` : "not set",
      hasPassword: !!process.env.SMTP_PASS,
    });
    
    // Provide more specific error messages
    let errorMessage = "Vi klarte ikke å sende meldingen akkurat nå. Prøv igjen om litt.";
    
    if (error.code === "EAUTH" || error.message?.includes("Authentication unsuccessful") || error.responseCode === 535) {
      if (error.message?.includes("security defaults policy")) {
        errorMessage = "E-post autentisering feilet: Kontoen er låst av Microsoft Security Defaults. Kontakt administrator for å aktivere SMTP AUTH.";
      } else {
        errorMessage = "E-post autentisering feilet: Sjekk at brukernavn og app-passord er riktig. Husk at app-passordet ikke skal ha mellomrom.";
      }
    } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      errorMessage = "Kunne ikke koble til e-postserveren. Sjekk at SMTP_HOST og SMTP_PORT er riktig, og at port 587 ikke er blokkert.";
    } else if (error.code === "EENVELOPE" || error.responseCode === 550) {
      errorMessage = "E-postadressen er ugyldig eller avvist av serveren. Sjekk at SMTP_FROM matcher den autentiserte brukeren.";
    } else if (error.message?.includes("Invalid login") || error.responseCode === 535) {
      errorMessage = "E-post autentisering feilet: Sjekk at brukernavn og app-passord er riktig i .env.local. App-passordet skal ikke ha mellomrom.";
    }
    
    return NextResponse.json(
      { 
        message: errorMessage,
        // Include error code in development for debugging
        ...(process.env.NODE_ENV === 'development' && { 
          debug: {
            code: error.code,
            responseCode: error.responseCode,
            message: error.message,
          }
        })
      },
      { status: 500 }
    );
  }
}

