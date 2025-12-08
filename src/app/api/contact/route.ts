import { NextResponse } from "next/server";
import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

// Microsoft Graph API configuration
function getGraphClient() {
  const tenantId = process.env.MICROSOFT_TENANT_ID;
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    return null;
  }

  // Create credential using Client Secret
  const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

  // Create authentication provider
  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ["https://graph.microsoft.com/.default"],
  });

  // Create Graph client
  const client = Client.initWithMiddleware({ authProvider });

  return client;
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

    const graphClient = getGraphClient();
    
    if (!graphClient) {
      console.error("Microsoft Graph API credentials not configured");
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

    // From address - must be the email of the service account with Mail.Send permission
    const fromAddress = process.env.MICROSOFT_FROM_EMAIL || "help@dbinfo.no";

    // Email content HTML
    const emailBody = `
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
    `;

    // Send email via Microsoft Graph API
    // Using sendMail API which sends on behalf of the authenticated user
    await graphClient
      .api(`/users/${fromAddress}/sendMail`)
      .post({
        message: {
          subject: emailSubject,
          body: {
            contentType: "HTML",
            content: emailBody,
          },
          toRecipients: recipients.map((email) => ({
            emailAddress: {
              address: email,
            },
          })),
          replyTo: [
            {
              emailAddress: {
                address: email,
                name: name,
              },
            },
          ],
        },
        saveToSentItems: true,
      });

    return NextResponse.json(
      { message: "Melding sendt!" },
      { status: 200 }
    );
  } catch (error: any) {
    // Detailed error logging for debugging
    console.error("Failed to send contact email via Microsoft Graph API - Full error:", {
      message: error.message,
      statusCode: error.statusCode,
      code: error.code,
      stack: error.stack,
      hasTenantId: !!process.env.MICROSOFT_TENANT_ID,
      hasClientId: !!process.env.MICROSOFT_CLIENT_ID,
      hasClientSecret: !!process.env.MICROSOFT_CLIENT_SECRET,
      fromEmail: process.env.MICROSOFT_FROM_EMAIL || "help@dbinfo.no",
    });
    
    // Provide more specific error messages
    let errorMessage = "Vi klarte ikke å sende meldingen akkurat nå. Prøv igjen om litt.";
    
    if (error.statusCode === 401 || error.message?.includes("Unauthorized")) {
      errorMessage = "E-post autentisering feilet: Sjekk at MICROSOFT_TENANT_ID, MICROSOFT_CLIENT_ID og MICROSOFT_CLIENT_SECRET er riktig konfigurert.";
    } else if (error.statusCode === 403 || error.message?.includes("Forbidden")) {
      errorMessage = "Manglende rettigheter: App Registration mangler Mail.Send-rettighet eller rettigheten er ikke gitt til riktig bruker.";
    } else if (error.statusCode === 404 || error.message?.includes("NotFound")) {
      errorMessage = "E-postadressen ikke funnet: Sjekk at MICROSOFT_FROM_EMAIL er en gyldig e-postadresse i din Azure AD.";
    } else if (error.message?.includes("MailboxNotEnabledForRESTAPI")) {
      errorMessage = "E-postboksen støtter ikke Graph API: Kontakt administrator for å aktivere REST API for e-postboksen.";
    }
    
    return NextResponse.json(
      { 
        message: errorMessage,
        // Include error details in development for debugging
        ...(process.env.NODE_ENV === 'development' && { 
          debug: {
            statusCode: error.statusCode,
            code: error.code,
            message: error.message,
          }
        })
      },
      { status: 500 }
    );
  }
}

