# Kontaktform - API Sendingslogikk (Vanilla JS)

Kun backend API-ruten og hvordan du kaller den fra vanilla JavaScript.

## Backend API Route (Next.js API Route)

Plasser denne i `src/app/api/contact/route.ts` (eller tilsvarende path i ditt prosjekt):

```typescript
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

    // Email addresses to send to - ENDRE TIL DINE MAILADRESSER
    const recipients = ["bringedal@dbinfo.no", "dahler@dbinfo.no"];

    // Email subject
    const emailSubject = `Kontakt fra nettsiden: ${subject}`;

    // From address - must be the email of the service account with Mail.Send permission
    const fromAddress = process.env.MICROSOFT_FROM_EMAIL || "help@dbinfo.no";

    // Email content HTML
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">Ny kontaktmelding fra nettsiden</h2>
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
    console.error("Failed to send contact email:", error);
    
    let errorMessage = "Vi klarte ikke å sende meldingen akkurat nå. Prøv igjen om litt.";
    
    if (error.statusCode === 401 || error.message?.includes("Unauthorized")) {
      errorMessage = "E-post autentisering feilet.";
    } else if (error.statusCode === 403 || error.message?.includes("Forbidden")) {
      errorMessage = "Manglende rettigheter.";
    } else if (error.statusCode === 404 || error.message?.includes("NotFound")) {
      errorMessage = "E-postadressen ikke funnet.";
    }
    
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}
```

## Vanilla JavaScript - Hvordan kalle API-en

Legg til denne funksjonen i din JavaScript-fil:

```javascript
async function sendContactForm(formData) {
  try {
    // Vis loading state (hvis du har det)
    const submitButton = document.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sender...';
    }

    // Send POST request til API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Vis feilmelding
      throw new Error(data.message || 'Noe gikk galt. Prøv igjen.');
    }

    // Suksess - vis melding og tilbakestill form
    alert('Takk for meldingen! Vi kommer tilbake til deg så snart som mulig.');
    
    // Tilbakestill form (hvis du har en)
    const form = document.querySelector('form');
    if (form) {
      form.reset();
    }

    return { success: true, message: data.message };
  } catch (error) {
    // Vis feilmelding
    alert(error.message || 'Vi klarte ikke å sende meldingen. Prøv igjen senere.');
    return { success: false, error: error.message };
  } finally {
    // Gjenopprett button state
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText || 'Send melding';
    }
  }
}

// Eksempel på hvordan du bruker det med et form:
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone')?.value || '',
    subject: document.querySelector('#subject').value,
    message: document.querySelector('#message').value,
  };

  await sendContactForm(formData);
});
```

## Alternativ: Mer komplett eksempel med feilhåndtering

```javascript
async function handleContactFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = {
    name: form.querySelector('[name="name"]').value.trim(),
    email: form.querySelector('[name="email"]').value.trim(),
    phone: form.querySelector('[name="phone"]')?.value.trim() || '',
    subject: form.querySelector('[name="subject"]').value.trim(),
    message: form.querySelector('[name="message"]').value.trim(),
  };

  // Validering på frontend (valgfritt, backend validerer også)
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    alert('Alle påkrevde felt må fylles ut.');
    return;
  }

  // Email validering (valgfritt)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert('Ugyldig e-postadresse.');
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const errorDiv = form.querySelector('.error-message');
  const successDiv = form.querySelector('.success-message');
  
  // Reset messages
  if (errorDiv) errorDiv.style.display = 'none';
  if (successDiv) successDiv.style.display = 'none';
  
  // Loading state
  const originalButtonText = submitButton ? submitButton.textContent : '';
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sender...';
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Noe gikk galt. Prøv igjen.');
    }

    // Success
    if (successDiv) {
      successDiv.textContent = 'Takk for meldingen! Vi kommer tilbake til deg så snart som mulig.';
      successDiv.style.display = 'block';
    } else {
      alert('Takk for meldingen! Vi kommer tilbake til deg så snart som mulig.');
    }

    // Reset form
    form.reset();

  } catch (error) {
    // Error
    if (errorDiv) {
      errorDiv.textContent = error.message || 'Vi klarte ikke å sende meldingen. Prøv igjen senere.';
      errorDiv.style.display = 'block';
    } else {
      alert(error.message || 'Vi klarte ikke å sende meldingen. Prøv igjen senere.');
    }
  } finally {
    // Restore button
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  }
}

// Koble til form
document.querySelector('form').addEventListener('submit', handleContactFormSubmit);
```

## Nødvendige dependencies

```json
{
  "dependencies": {
    "@azure/identity": "^4.13.0",
    "@microsoft/microsoft-graph-client": "^3.0.7"
  }
}
```

## Environment Variables

```
MICROSOFT_TENANT_ID=din-tenant-id
MICROSOFT_CLIENT_ID=din-client-id
MICROSOFT_CLIENT_SECRET=din-client-secret
MICROSOFT_FROM_EMAIL=help@dbinfo.no
```

## Dataformat som sendes til API

API-en forventer JSON med følgende struktur:

```javascript
{
  name: "string (påkrevd)",
  email: "string (påkrevd)",
  phone: "string (valgfritt)",
  subject: "string (påkrevd)",
  message: "string (påkrevd)"
}
```

## Response format

**Suksess (200):**
```json
{
  "message": "Melding sendt!"
}
```

**Feil (400/500):**
```json
{
  "message": "Feilmelding tekst"
}
```

## Ting å endre

1. **Recipients** (linje 65): Endre til dine e-postadresser
2. **Email subject/body**: Tilpass teksten i e-postene
3. **Environment variables**: Sett opp Azure AD App Registration

