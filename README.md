# Brigades de Parcs i Jardins i arbrat de Tarragona

Rèplica en Astro de l'Experience Builder d'ArcGIS "Tarragona Ambitec".

| Ruta | Pestanya |
|---|---|
| `/` | Redirigeix a `/parcs-i-jardins` |
| `/parcs-i-jardins` | Brigades de Parcs i Jardins i arbrat de Tarragona (portada) |
| `/brigades-de-parcs-i-jardins` | Brigades de Parcs i Jardins |
| `/mapa-de-arbrat-de-tarragona` | Mapa de l'arbrat de Tarragona (Power BI incrustat) |
| `/beneficis-arbrat` | Beneficis de l'arbrat |

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

L'URL del Power BI és a `src/pages/mapa-de-arbrat-de-tarragona.astro` (`POWERBI_URL`).
