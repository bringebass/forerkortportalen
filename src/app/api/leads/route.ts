import { NextResponse } from "next/server";
import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

import Lead from "@/lib/models/Lead";
import { connectToDatabase } from "@/lib/mongodb";
import { leadSchema } from "@/lib/validation/leadSchema";

// Microsoft Graph API configuration (same as contact form)
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
  const payload = await request.json();
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Valideringsfeil",
        errors: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    const lead = await Lead.create({
      ...parsed.data,
      sourcePage: parsed.data.sourcePage ?? "forerkortportalen.no",
    });

    // Send email notification (same recipients as contact form)
    try {
      const graphClient = getGraphClient();
      
      if (graphClient) {
        const recipients = ["bringedal@dbinfo.no", "dahler@dbinfo.no"];
        const fromAddress = process.env.MICROSOFT_FROM_EMAIL || "help@dbinfo.no";
        const emailSubject = `Ny lead fra Førerkortportalen: ${parsed.data.fullName}`;

        // Format license type for display - prioritize mainLicenseSelection if set
        let licenseTypeDisplay: string;
        
        if (parsed.data.mainLicenseSelection) {
          // Use mainLicenseSelection for primary display
          licenseTypeDisplay = parsed.data.mainLicenseSelection === "B"
          ? "Klasse B (Manuell)"
          : parsed.data.mainLicenseSelection === "B_AUT"
          ? "Klasse B (Automat)"
          : parsed.data.mainLicenseSelection === "OTHER"
            ? parsed.data.licenseType || "Annet"
            : parsed.data.mainLicenseSelection;
        } else {
          // Fallback to licenseType
          licenseTypeDisplay = parsed.data.licenseType === "B" 
            ? "Klasse B (Manuell)"
            : parsed.data.licenseType === "B_AUT"
            ? "Klasse B (Automat)"
            : parsed.data.licenseType === "MC"
            ? "MC-klasser"
            : parsed.data.licenseType === "Tilhenger"
            ? "Tilhenger"
            : parsed.data.licenseType || "Ikke spesifisert";
        }

        // Email content HTML
        const emailBody = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b;">Ny lead fra Førerkortportalen</h2>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 8px 0;"><strong>Navn:</strong> ${parsed.data.fullName}</p>
              <p style="margin: 8px 0;"><strong>E-post:</strong> ${parsed.data.email}</p>
              <p style="margin: 8px 0;"><strong>Telefon:</strong> ${parsed.data.phone}</p>
              <p style="margin: 8px 0;"><strong>Postnummer:</strong> ${parsed.data.postalCode}</p>
              <p style="margin: 8px 0;"><strong>Førerkortklasse:</strong> ${licenseTypeDisplay}</p>
              ${parsed.data.sourcePage ? `<p style="margin: 8px 0;"><strong>Kilde:</strong> ${parsed.data.sourcePage}</p>` : ""}
              <p style="margin: 8px 0;"><strong>Markedsføringssamtykke:</strong> ${parsed.data.marketingConsent ? "Ja" : "Nei"}</p>
            </div>
            ${parsed.data.additionalInfo ? `
            <div style="border-top: 2px solid #e2e8f0; padding-top: 20px; margin-top: 20px;">
              <p style="font-weight: bold; color: #1e293b; margin-bottom: 10px;">Tilleggsinformasjon:</p>
              <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${parsed.data.additionalInfo.replace(/\n/g, "<br>")}</p>
            </div>
            ` : ""}
          </div>
        `;

        // Send email via Microsoft Graph API
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
                    address: parsed.data.email,
                    name: parsed.data.fullName,
                  },
                },
              ],
            },
            saveToSentItems: true,
          });
      } else {
        console.warn("Microsoft Graph API credentials not configured - email notification not sent");
      }
    } catch (emailError: any) {
      // Log email error but don't fail the request if lead was saved successfully
      console.error("Failed to send lead notification email:", {
        message: emailError.message,
        statusCode: emailError.statusCode,
        code: emailError.code,
      });
      // Continue - the lead was saved successfully, email is just a notification
    }

    return NextResponse.json(
      { message: "Lead lagret" },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error("Failed to save lead", error);
    
    // More detailed error logging for debugging
    const errorMessage = error?.message || "Unknown error";
    const errorName = error?.name || "Unknown";
    
    console.error("Error details:", {
      name: errorName,
      message: errorMessage,
      stack: error?.stack,
      hasMongoUri: !!process.env.MONGODB_URI,
      mongoDbName: process.env.MONGODB_DB || "drivingschool_leads",
    });
    
    // Check for specific MongoDB connection errors
    if (errorMessage.includes("MONGODB_URI mangler")) {
      return NextResponse.json(
        {
          message: "Database konfigurasjon mangler. Kontakt systemadministrator.",
        },
        { status: 500 }
      );
    }
    
    if (errorMessage.includes("authentication") || errorMessage.includes("Authentication failed")) {
      return NextResponse.json(
        {
          message: "Database autentisering feilet. Kontakt systemadministrator.",
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      {
        message:
          "Vi klarte ikke å lagre henvendelsen akkurat nå. Prøv igjen om litt.",
        // Only include error details in development
        ...(process.env.NODE_ENV === "development" && {
          error: errorMessage,
        }),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "API kjører",
  });
}



