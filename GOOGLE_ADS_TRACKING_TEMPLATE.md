# Google Ads Tracking Template

Denne filen inneholder tracking template som kan brukes i Google Ads for å spore klikk og konverteringer.

## Tracking Template

Kopier og lim inn følgende tracking template i Google Ads:

### Standard Tracking Template

```
{lpurl}?gclid={gclid}
```

### Tracking Template med UTM-parametere

For mer detaljert sporing, bruk denne versjonen:

```
{lpurl}?gclid={gclid}&utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}
```

## Hvordan bruke i Google Ads

1. **Gå til Google Ads-kontoen din**
2. **Velg kampanje eller annonsegruppe**
3. **Klikk på "Settings" (Innstillinger)**
4. **Scroll ned til "URL options"**
5. **Lim inn tracking template i "Tracking template"-feltet**
6. **Lagre endringene**

## Placeholders forklart

- `{lpurl}` - Landing page URL (destinasjons-URL fra annonsen)
- `{gclid}` - Google Click ID (legges automatisk til av Google)
- `{campaignid}` - Kampanje-ID
- `{creative}` - Creative ID
- `{keyword}` - Nøkkelord som utløste annonsen

## Eksempel

Hvis destinasjons-URL er:
```
https://forerkortportalen.no
```

Vil tracking template generere:
```
https://forerkortportalen.no?gclid=EAIaIQobChMI...
```

## Viktig

- Tracking template legges til på **kampanje- eller annonsegruppenivå** (ikke på annonse-nivå)
- `{gclid}` er nødvendig for at Google Ads skal kunne spore konverteringer
- Sørg for at destinasjons-URL ikke allerede inneholder `gclid`-parameter
- Test tracking template før du publiserer kampanjen

## Eksisterende konverteringssporing

Prosjektet har allerede Google Ads konverteringssporing satt opp:
- **Conversion ID**: `AW-17789739680/Qu87CPKMmc4bEKDF56JC`
- **Konvertering sporet på**: `/takk`-siden (etter skjema-innsending)

Tracking template vil fungere sammen med denne eksisterende konverteringssporingen.

