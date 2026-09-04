# Web Medicina PNI Bilbao — Dra. Ainara

Sitio estático en Astro + TypeScript para presentar la consulta de Medicina PNI de la Dra. Ainara en Bilbao. La V1 prioriza autoridad profesional, SEO local y conversión sin incorporar backend ni datos clínicos.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La salida estática se genera en `dist/`.

## Preview

```bash
npm run preview
```

## URLs importantes

- `/`
- `/pni-bilbao/`
- `/dra-ainara/`
- `/que-es-pni/`
- `/consulta/`
- `/recursos/`

## Datos profesionales pendientes

La fuente única de los datos es `src/config/site.ts`. Allí se podrán completar apellido, experiencia exacta, institución del Máster, colegiación, centro, dirección, contacto, duración, precio, modalidad online, enlaces sociales, textos legales y analítica.

Los valores pendientes permanecen en `null` y no deben renderizarse hasta estar confirmados. Antes de publicar se deben validar las credenciales y los requisitos aplicables a publicidad sanitaria en Euskadi.

## Booking

`src/components/BookingMock.astro` contiene una demostración local y no realiza reservas, no envía información ni almacena datos. El límite del proveedor está concentrado en este componente, que podrá sustituirse más adelante por Doctoralia, Docfav, iframe, widget o redirección sin rehacer las páginas.

## Analítica

Las interacciones del booking emiten eventos `ainara:analytics` en el documento (`booking_cta_click`, `booking_open`, `booking_slot_selected` y `booking_continue`). No se conecta ningún proveedor en esta fase.

## GitHub Pages

Astro genera HTML estático y el repositorio está configurado para publicarse automáticamente en GitHub Pages después de cada cambio enviado a `main`. `site` y `base` están definidos en `astro.config.mjs` para que enlaces, canónicas e imagen Open Graph funcionen bajo la ruta del repositorio.
