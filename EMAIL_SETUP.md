# E-post Setup Guide for Kontaktskjema

## Hva du trenger

For at kontaktskjemaet skal fungere, må du konfigurere SMTP-innstillinger i `.env.local` filen.

## Sikkerhetsanbefalinger

⚠️ **VIKTIG:** Selv om app-passord gir god beskyttelse, anbefaler vi å:
1. **Bruke en dedikert Gmail-konto** kun for applikasjonen (ikke din private konto)
2. **Eller bruke en profesjonell tjeneste** som SendGrid eller Resend (se nedenfor)

App-passord kan kun brukes til SMTP og gir ikke tilgang til resten av kontoen, men det er best praksis å isolere applikasjonskontoer.

## Gmail Konfigurasjon

### Alternativ A: Dedikert Gmail-konto (Anbefalt for Gmail)

1. **Opprett en ny Gmail-konto** kun for applikasjonen:
   - F.eks: `forerkortportalen@gmail.com` eller `noreply.forerkort@gmail.com`
   - Dette isolerer applikasjonen fra din private konto

2. **Aktiver 2-Step Verification**:
   - Gå til [Google Account Security](https://myaccount.google.com/security)
   - Klikk på "2-Step Verification" og aktiver det

3. **Opprett App Password**:
   - Gå til [Google Account App Passwords](https://myaccount.google.com/apppasswords)
   - Velg "Mail" som app og "Other (Custom name)" som enhet
   - Skriv inn "Førerkortportalen" som navn
   - Klikk "Generate"
   - **Kopier det 16-sifrede passordet** (du ser det bare én gang!)

4. **Legg til i `.env.local`**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=forerkortportalen@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
SMTP_FROM=forerkortportalen@gmail.com
```

### Alternativ B: Privat Gmail-konto (Mindre anbefalt)

Hvis du må bruke din private Gmail-konto, følg samme steg som over, men vær klar over:
- App-passord gir kun SMTP-tilgang (ikke full konto-tilgang)
- Du kan når som helst slette app-passordet i Google Account settings
- Det er fortsatt tryggere enn å bruke hovedpassordet ditt

### Eksempel:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=minepost@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
SMTP_FROM=minepost@gmail.com
```

## Alternativer:

### Alternativ 1: Outlook/Office 365
⚠️ **OBS:** Outlook kan være blokkert av Microsoft Security Defaults policy. Hvis du får feilmelding "user is locked by your organization's security defaults policy", må administratoren opprette et unntak, eller bruk Gmail i stedet.

1. **Legg til i `.env.local`**:
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=din-epost@domain.com
SMTP_PASS=ditt-app-passord
SMTP_FROM=din-epost@domain.com
```

2. **Opprett App Password** (hvis MFA er aktivert):
   - Gå til https://account.microsoft.com/security
   - Klikk på "Advanced security options"
   - Under "App passwords", klikk "Create a new app password"
   - Gi det et navn (f.eks. "Førerkortportalen")
   - Kopier det genererte passordet og bruk det i `SMTP_PASS`

**Hvis du får "Security Defaults policy" feil:**
- Kontakt Microsoft 365 administrator for å opprette et unntak for kontoen
- Eller bytt til Gmail (fungerer umiddelbart)

### Alternativ 2: SendGrid (Anbefalt for produksjon - Mest sikker)

SendGrid er en profesjonell e-posttjeneste designet for applikasjoner. Gratis tier inkluderer 100 e-poster/dag.

**Fordeler:**
- ✅ Ingen risiko for personlig konto
- ✅ Bedre leveringsrate (mindre spam-filtering)
- ✅ Detaljert logging og analytics
- ✅ Gratis tier: 100 e-poster/dag
- ✅ Enkel å skalere

**Slik setter du det opp:**

1. Opprett konto på https://sendgrid.com (gratis)
2. Verifiser e-postadressen din
3. Gå til Settings → API Keys
4. Klikk "Create API Key"
5. Gi den et navn (f.eks. "Førerkortportalen")
6. Velg "Full Access" eller "Restricted Access" (velg minst "Mail Send")
7. Kopier API-nøkkelen (du ser den bare én gang!)

8. Legg til i `.env.local`:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=ditt-sendgrid-api-key-her
SMTP_FROM=noreply@forerkortportalen.no
```

**OBS:** Du må verifisere `SMTP_FROM`-adressen i SendGrid før du kan sende. Du kan bruke din egen e-postadresse for testing, eller sette opp en egen domene senere.

### Alternativ 3: Resend (Moderne alternativ)

Resend er et nyere alternativ med moderne API og god utvikleropplevelse.

1. Opprett konto på https://resend.com
2. Verifiser domene eller bruk deres test-domene
3. Opprett API-nøkkel
4. Bruk Resend API direkte (krever kodeendring) eller SMTP

**OBS:** Resend bruker primært API, ikke SMTP. For SMTP-basert løsning, bruk SendGrid.

## Teste konfigurasjonen

1. Legg til innstillingene i `.env.local`
2. Start dev-serveren på nytt: `npm run dev`
3. Gå til `/kontakt` siden
4. Fyll ut kontaktskjemaet og send
5. Sjekk at eposten kommer til bringedal@dbinfo.no og dahler@dbinfo.no

## Feilsøking

- **"Invalid login"**: Passordet er feil eller MFA krever app password
- **"Connection timeout"**: Sjekk at port 587 ikke er blokkert av brannmur
- **"SMTP credentials not configured"**: Sjekk at alle SMTP-variablene er satt i `.env.local`

