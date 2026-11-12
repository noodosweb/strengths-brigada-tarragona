# Brigades de Parcs i Jardins i arbrat de Tarragona

Rèplica en Astro de l'Experience Builder d'ArcGIS "Tarragona Ambitec".

| Ruta | Pestanya |
|---|---|
| `/` | Redirigeix a `/parcs-i-jardins` |
| `/parcs-i-jardins` | Brigades de Parcs i Jardins i arbrat de Tarragona (portada) |
| `/brigades-de-parcs-i-jardins` | Brigades de Parcs i Jardins |
| `/mapa-de-arbrat-de-tarragona` | Mapa de l'arbrat de Tarragona (Power BI incrustat) |
| `/beneficis-arbrat` | Beneficis de l'arbrat |
| `/avis-legal` | Avís legal (peu de pàgina) |
| `/politica-de-privacitat` | Política de privacitat (peu de pàgina) |
| `/politica-de-cookies` | Política de cookies (peu de pàgina) |

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Les pàgines legals no vénen d'ArcGIS: estan adaptades de les de tarragona.cat (avis-legal, politica-de-privacitat, politica-de-cookies) al domini www.brigadadetarragona.cat. El peu de pàgina és a `src/components/Footer.astro`.

Consentiment de cookies: el bàner i el panell són a `src/components/CookieConsent.astro`, la lògica a `src/lib/consent.ts` i el Power BI es carrega amb `src/components/ConsentEmbed.astro`, que no el carrega fins que l'usuari accepta. Si s'afegeix qualsevol contingut de tercers que instal·li cookies (vídeos, mapes, analítica...), cal passar-lo per `ConsentEmbed`, afegir-lo a `/politica-de-cookies` i incrementar `CONSENT_VERSION`.

L'URL del Power BI és a `src/pages/mapa-de-arbrat-de-tarragona.astro` (`POWERBI_URL`).
