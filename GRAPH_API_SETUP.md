# Microsoft Graph API E-post Setup

Denne guiden forklarer hvordan du setter opp Microsoft Graph API for å sende e-post via Office 365/Outlook uten SMTP.

## Fordeler med Graph API

✅ **Ingen SMTP-problemer**: Unngår alle problemer med Security Defaults policy  
✅ **Ingen app-passord**: Bruker moderne OAuth2 Client Credentials flow  
✅ **Ingen IP-whitelist**: Fungerer fra hvor som helst  
✅ **Bedre sikkerhet**: Token-basert autentisering  
✅ **Pålitelig**: Microsofts offisielle API for Office 365  

## Steg 1: Opprett Azure AD App Registration

1. Gå til [Azure Portal](https://portal.azure.com)
2. Naviger til **Azure Active Directory** → **App registrations**
3. Klikk **New registration**
4. Fyll ut:
   - **Name**: `Førerkortportalen Email Service`
   - **Supported account types**: Velg passende (vanligvis "Accounts in this organizational directory only")
   - **Redirect URI**: Ikke nødvendig for denne applikasjonen
5. Klikk **Register**

## Steg 2: Noter ned Tenant ID og Client ID

Etter registrering får du:
- **Tenant ID** (Directory ID) - finnes på Overview-siden
- **Client ID** (Application ID) - finnes på Overview-siden

Kopier disse - du trenger dem senere.

## Steg 3: Gi Mail.Send-rettighet

1. I App Registration, gå til **API permissions**
2. Klikk **Add a permission**
3. Velg **Microsoft Graph**
4. Velg **Application permissions** (ikke Delegated)
5. Søk etter og velg **Mail.Send**
6. Klikk **Add permissions**
7. **VIKTIG**: Klikk **Grant admin consent** for din organisasjon
   - Dette gir faktisk tillatelse til appen

## Steg 4: Opprett Client Secret

1. Gå til **Certificates & secrets**
2. Klikk **New client secret**
3. Fyll ut:
   - **Description**: `Førerkortportalen Production`
   - **Expires**: Velg passende (anbefalt: 24 måneder)
4. Klikk **Add**
5. **VIKTIG**: Kopier **Value**-feltet umiddelbart - du ser det bare én gang!
   - Dette er din `MICROSOFT_CLIENT_SECRET`

## Steg 5: Konfigurer e-postadresse

1. Sørg for at e-postadressen du vil sende fra (f.eks. `help@dbinfo.no`) eksisterer i din Azure AD
2. App Registration må ha rettigheter til å sende på vegne av denne adressen
3. Hvis du sender på vegne av en spesifikk bruker, må du gi appen rettigheter til den brukerens postkasse

## Steg 6: Legg til miljøvariabler i Vercel

Gå til Vercel-prosjektet ditt og legg til følgende **Environment Variables**:

```
MICROSOFT_TENANT_ID=din-tenant-id-her
MICROSOFT_CLIENT_ID=din-client-id-her
MICROSOFT_CLIENT_SECRET=din-client-secret-her
MICROSOFT_FROM_EMAIL=help@dbinfo.no
```

**Viktig**: 
- Ikke legg til mellomrom i secret-verdien
- Bruk samme miljøvariabler for Production, Preview og Development hvis nødvendig
- Redeploy applikasjonen etter å ha lagt til variablene

## Steg 7: Test

1. Gå til kontaktskjemaet på nettsiden
2. Fyll ut og send en testmelding
3. Sjekk at e-posten kommer frem til mottakerne

## Feilsøking

### 401 Unauthorized
- Sjekk at alle tre miljøvariabler er riktig satt
- Sjekk at Client Secret ikke har utløpt
- Verifiser at Tenant ID og Client ID er korrekt

### 403 Forbidden
- Sjekk at **Mail.Send**-rettighet er gitt (Application permissions)
- Sjekk at **Admin consent** er gitt
- Verifiser at appen har rettigheter til å sende på vegne av `MICROSOFT_FROM_EMAIL`

### 404 Not Found
- Sjekk at `MICROSOFT_FROM_EMAIL` er en gyldig e-postadresse i din Azure AD
- Verifiser at e-postboksen eksisterer og er aktiv

### MailboxNotEnabledForRESTAPI
- Kontakt administrator for å aktivere REST API for e-postboksen
- Dette kan kreve at e-postboksen er aktivert for Exchange Online

## Sikkerhet

- **Aldri** committ secrets til Git
- Bruk Vercel Environment Variables for alle secrets
- Roter Client Secrets regelmessig (hver 12-24 måneder)
- Overvåk app-aktiviteten i Azure Portal

## Hvordan det fungerer

1. Kontaktskjema sender POST til `/api/contact`
2. API-ruten autentiserer med Azure AD ved hjelp av Client Secret
3. Får tilgangstoken fra Microsoft Identity Platform
4. Bruker Microsoft Graph API til å sende e-post på vegne av `help@dbinfo.no`
5. E-post sendes til mottakerne via Office 365

Ingen SMTP, ingen app-passord, ingen IP-whitelist nødvendig! 🎉

