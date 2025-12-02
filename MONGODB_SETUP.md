# MongoDB Setup Guide

## Hva du trenger

1. **MongoDB Connection String (URI)**

### Alternativ 1: MongoDB Atlas (Anbefalt for produksjon)
1. Gå til https://www.mongodb.com/cloud/atlas
2. Opprett en gratis konto (hvis du ikke har)
3. Opprett et nytt cluster (gratis tier er tilstrekkelig)
4. Gå til "Database Access" og opprett en databasebruker
5. Gå til "Network Access" og legg til IP-adressen din (eller 0.0.0.0/0 for å tillate alle - kun for testing)
6. Gå til "Database" > "Connect" > "Connect your application"
7. Kopier connection string som ser slik ut: `mongodb+srv://username:password@cluster.mongodb.net/`
8. Erstatt `<password>` med passordet du opprettet

### Alternativ 2: Lokal MongoDB
Hvis du har MongoDB installert lokalt:
```
mongodb://localhost:27017/
```

## Sett opp miljøvariabler

1. Opprett en `.env.local` fil i root-mappen (sammen med package.json)
2. Legg til følgende:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB=drivingschool_leads
```

**VIKTIG**: `.env.local` er allerede i `.gitignore` og vil ikke bli committet til git.

## Teste tilkoblingen

Når du har satt opp miljøvariablene, start dev-serveren på nytt:
```bash
npm run dev
```

Prøv å sende inn et skjema. Hvis alt fungerer, vil dataen bli lagret i MongoDB.

## Struktur

Database struktur er allerede definert i `src/lib/models/Lead.ts`:
- `fullName` (String, required)
- `email` (String, required)
- `phone` (String, required)
- `postalCode` (String, required)
- `licenseType` (String, required)
- `startDate` (String, required)
- `intensiveCourse` (enum: ja, nei, usikker)
- `preferredContact` (enum: telefon, epost)
- `trafficCourseStatus` (enum: fullfort, pagar, ikke)
- `message` (String, optional)
- `marketingConsent` (Boolean, required)
- `sourcePage` (String, default: "forerkorttilbud.no")
- `createdAt` (auto-generated timestamp)
- `updatedAt` (auto-generated timestamp)

## Neste steg (valgfritt)

- Legg til indexes for bedre ytelse (f.eks. på `email`, `postalCode`)
- Sett opp admin-panel for å se leads
- Legg til logging/analytics

