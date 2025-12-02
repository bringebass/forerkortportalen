# E-post Setup Guide for Kontaktskjema

## Hva du trenger

For at kontaktskjemaet skal fungere, må du konfigurere SMTP-innstillinger i `.env.local` filen.

## Outlook/Office 365 Konfigurasjon

Hvis du bruker Outlook/Office 365 (bringedal@dbinfo.no), legg til følgende i `.env.local`:

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=bringedal@dbinfo.no
SMTP_PASS=ditt-outlook-passord
SMTP_FROM=bringedal@dbinfo.no
```

### Viktige notater for Outlook:

1. **Passord**: Bruk ditt vanlige Outlook/Office 365 passord
2. **Multi-Factor Authentication (MFA)**: Hvis du har MFA aktivert, må du:
   - Enten deaktivere MFA for denne applikasjonen (ikke anbefalt for sikkerhet)
   - Eller opprette en "App Password" i Microsoft Account settings
3. **Office 365 Admin**: Hvis dette er en organisasjonskonto, kan det hende at administratoren må aktivere SMTP AUTH i Exchange Admin Center

## Alternativer hvis Outlook ikke fungerer:

### Alternativ 1: SendGrid (Anbefalt for produksjon)
1. Opprett konto på https://sendgrid.com
2. Generer API-nøkkel
3. Legg til i `.env.local`:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=ditt-sendgrid-api-key
SMTP_FROM=noreply@forerkortportalen.no
```

### Alternativ 2: Gmail (for testing)
1. Aktiver "2-Step Verification" i Google Account
2. Opprett "App Password"
3. Legg til i `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=din-epost@gmail.com
SMTP_PASS=ditt-app-passord
SMTP_FROM=noreply@forerkortportalen.no
```

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

