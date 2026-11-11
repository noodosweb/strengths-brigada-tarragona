# Brigades de Parcs i Jardins i arbrat de Tarragona

Rèplica en Astro del Experience Builder de ArcGIS "Tarragona Ambitec". ArcGIS es la fuente de verdad del contenido; este repo lo replica.

Instrucciones generales de desarrollo (servidor dev, documentación de Astro): @AGENTS.md

## Sincronizar cambios hechos en ArcGIS

Siempre que alguien diga que se ha editado algo en ArcGIS (textos, imágenes, enlaces, páginas, el Power BI...), no pidas que te describan el cambio ni lo apliques de memoria: conéctate tú a las URLs públicas de ArcGIS, compara con el repo y aplica las diferencias.

### Origen

- Experience ID: `84359429ad5541edb7b8c6e5c4dc71d5`
- Experiencia publicada: `https://experience.arcgis.com/experience/84359429ad5541edb7b8c6e5c4dc71d5/`
- Configuración publicada (JSON, pública, sin login):
  `https://www.arcgis.com/sharing/rest/content/items/84359429ad5541edb7b8c6e5c4dc71d5/data?f=json`
- Metadatos del item (fecha `modified`, estado de publicación):
  `https://www.arcgis.com/sharing/rest/content/items/84359429ad5541edb7b8c6e5c4dc71d5?f=json`

La experiencia se renderiza con JavaScript, así que descargar el HTML de la página no sirve: lee el JSON de configuración (con `curl`), que contiene `pages`, `layouts`, `widgets` (textos, imágenes, botones, embeds) y `publishTimestamp`.

Solo es visible lo **publicado**. Las URLs con `?draft=true` requieren login; si el cambio no aparece en el JSON, lo más probable es que en ArcGIS se haya guardado pero no publicado: avisa al usuario en lugar de inventar el cambio.

### Correspondencia de páginas

| Página en ArcGIS | ID | Archivo en el repo | URL final |
|---|---|---|---|
| Brigades de Parcs i Jardins i arbrat de Tarragona (portada) | `page_6` | `src/pages/parcs-i-jardins.astro` | `/parcs-i-jardins` |
| Brigades de Parcs i Jardins | `page_5` | `src/pages/brigades-de-parcs-i-jardins.astro` | `/brigades-de-parcs-i-jardins` |
| Mapa de l'arbrat de Tarragona | `page_4` | `src/pages/mapa-de-arbrat-de-tarragona.astro` | `/mapa-de-arbrat-de-tarragona` |
| Beneficis de l'arbrat | `page_7` | `src/pages/beneficis-arbrat.astro` | `/beneficis-arbrat` |

El menú está en `src/components/Nav.astro` y los estilos en `src/styles/global.css`.

### Pasos

1. Descarga el JSON de configuración al scratchpad y revisa `publishTimestamp` / `modified` para confirmar que hay una publicación reciente.
2. Recorre cada página (`pages` → `layouts` → `widgets`) y compara textos, imágenes, enlaces y embeds con el archivo `.astro` correspondiente. Revisa las cuatro páginas, no solo la que mencionen.
3. Aplica las diferencias al repo. Si hay imágenes nuevas, descárgalas a `public/images/`. Si aparece o desaparece una página, actualiza también `Nav.astro`, el `README.md` y la tabla de arriba.
4. Mantén lo que es propio de este repo y no viene de ArcGIS: las URLs finales de la tabla, la redirección de `/` a `/parcs-i-jardins` (en `astro.config.mjs`), el menú hamburguesa en móvil y el ajuste del Power BI en móvil.
5. Ejecuta `npx astro build` y resume al usuario qué ha cambiado, página por página (o di que no hay diferencias).
