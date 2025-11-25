## Førerkortportalen – leadgen for trafikkskoler

Moderne Next.js-applikasjon som samler inn leads til norske trafikkskoler. Løsningen er optimalisert for mobil, prioritere skjemaet øverst og kombinerer informasjonsinnhold for SEO med et tydelig handlingsforløp.

### Teknologistack

- Next.js 14 (App Router) med React Server Components
- TypeScript og Tailwind CSS (inkl. `@tailwindcss/forms`)
- MongoDB Atlas med Mongoose for lagring av leads
- API Route (`app/api/leads`) for sikker mottak av skjema

### Kom i gang

1. Installer avhengigheter

   ```bash
   npm install
   ```

2. Kopier miljøvariabler

   ```bash
   cp env.local.example .env.local
   ```

   Fyll inn `MONGODB_URI` (inkl. bruker/passord) og eventuelt `MONGODB_DB`.

3. Start utviklingsserver

   ```bash
   npm run dev
   ```

   Åpne [http://localhost:3000](http://localhost:3000).

### Skjema og API

- Skjemaet finner du øverst på forsiden (`LeadForm`) og er optimalisert for mobil.
- Innsendte data sendes til `POST /api/leads` og valideres både i klient og på server.
- Feltvalidering håndteres med Zod (`leadSchema`).
- Lead lagres i MongoDB via `mongoose`. Justér modell i `src/lib/models/Lead.ts`.

For produksjon bør du opprette en MongoDB Atlas-kluster i EU (f.eks. Frankfurt), og legge inn tilkoblingsstrengen på Vercel som `MONGODB_URI`.

### SEO

- Metadata er satt for Førerkortportalen inkludert Open Graph, Twitter og kanonisk URL.
- Strukturerte data (`WebSite` og `FAQPage`) leveres som JSON-LD gjennom `next/script`.
- Innhold inneholder relevante nøkkelord for norske trafikkskoler, intensivkurs, førerkortklasser m.m.

### Scripts

| Kommando        | Beskrivelse                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Kjører utviklingsserver          |
| `npm run build` | Prodbygger Next.js               |
| `npm run start` | Kjører produsert build           |
| `npm run lint`  | ESLint via Next.js-konfigurasjon |

### Deploy

Deploy til Vercel via ett Next.js-prosjekt. Husk å legge inn `MONGODB_URI` og `MONGODB_DB` som miljøvariabler, og aktiver produksjonsdatabasen før du åpner skjemaet for trafikk. README gjelder også for staging-miljøer.*** End Patch```} bố
