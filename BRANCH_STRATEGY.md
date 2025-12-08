# Branch Strategy for Safe Deployments

Denne guiden forklarer hvordan du setter opp en sikker branch-strategi for å unngå uønskede produksjonsdeployments.

## Branch-struktur

### Main Branch (Produksjon)
- **Navn**: `main`
- **Bruksområde**: Kun for produksjonsklare kode
- **Deployment**: Automatisk til produksjon på Vercel
- **Regel**: **ALDRI** push direkte til main uten å teste først

### Develop Branch (Utvikling)
- **Navn**: `develop`
- **Bruksområde**: Utvikling og testing
- **Deployment**: Automatisk til preview-miljø på Vercel
- **Regel**: Dette er din hovedutviklingsbranch

## Oppsett

### 1. Opprett develop branch

```bash
# Sørg for at du er på main og har siste endringer
git checkout main
git pull origin main

# Opprett develop branch
git checkout -b develop

# Push develop branch til remote
git push -u origin develop
```

### 2. Konfigurer Vercel

1. Gå til [Vercel Dashboard](https://vercel.com/dashboard)
2. Velg ditt prosjekt
3. Gå til **Settings** → **Git**
4. Under **Production Branch**, sett til: `main`
5. Under **Preview Deployments**, aktiver for alle branches (inkludert `develop`)

Dette sikrer at:
- ✅ Kun `main` branch deployer til produksjon
- ✅ `develop` og andre branches får preview-deployments
- ✅ Du kan teste endringer før de går til produksjon

## Arbeidsflyt

### Daglig utvikling

```bash
# Start med å sjekke ut develop branch
git checkout develop
git pull origin develop

# Opprett en feature branch (valgfritt, men anbefalt)
git checkout -b feature/din-feature-navn

# Gjør endringer og commit
git add .
git commit -m "Beskrivelse av endringene"

# Push til remote
git push origin feature/din-feature-navn

# Når ferdig, merge til develop
git checkout develop
git merge feature/din-feature-navn
git push origin develop
```

### Når klar for produksjon

```bash
# Test at alt fungerer på develop branch
# Sjekk preview-deployment på Vercel

# Når alt er testet og godkjent:
git checkout main
git pull origin main
git merge develop
git push origin main

# Dette vil automatisk trigge produksjonsdeployment
```

## Sikkerhetsregler

### ❌ Gjør IKKE dette:
- Push direkte til `main` uten å teste først
- Merge til `main` uten å ha testet på `develop`
- Deploy til produksjon uten å ha verifisert endringene

### ✅ Gjør dette:
- Alltid utvikle på `develop` eller feature branches
- Test endringer på preview-deployment først
- Merge til `main` kun når alt er testet og godkjent
- Bruk pull requests hvis du jobber i team

## Vercel Preview Deployments

Når du pusher til `develop` eller andre branches:
- Vercel oppretter automatisk en preview-URL
- Du kan teste endringene før de går til produksjon
- Preview-URLs ser slik ut: `https://forerkortportalen-git-develop-username.vercel.app`

## Nødstilfelle: Rask hotfix

Hvis du trenger å fikse noe kritiskt direkte i produksjon:

```bash
# Opprett hotfix branch fra main
git checkout main
git pull origin main
git checkout -b hotfix/kritisk-fix

# Gjør endringene
git add .
git commit -m "Hotfix: Beskrivelse"

# Merge til både main og develop
git checkout main
git merge hotfix/kritisk-fix
git push origin main

git checkout develop
git merge hotfix/kritisk-fix
git push origin develop
```

## Sjekkliste før produksjonsdeployment

- [ ] Alle endringer testet på `develop` branch
- [ ] Preview-deployment fungerer som forventet
- [ ] Ingen console errors eller warnings
- [ ] Alle miljøvariabler er satt i Vercel
- [ ] API-endepunkter fungerer
- [ ] Skjemaer fungerer som forventet
- [ ] SEO og metadata er korrekt
- [ ] Responsivt design fungerer på alle enheter

## Hjelp

Hvis du har spørsmål eller trenger hjelp:
- Sjekk Vercel Dashboard for deployment-logs
- Sjekk GitHub for branch-status
- Test alltid på preview før produksjon

