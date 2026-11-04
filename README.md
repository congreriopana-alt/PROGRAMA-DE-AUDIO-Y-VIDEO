# Sonido · El Río Panajachel

Programa de sonido, video, plataforma y micrófonos con asignación automática.
Sube los PDFs de Vida y Ministerio y Discursos Públicos, y el programa se genera
sin traslapes. Se guarda por mes y se instala como app en celular y computadora.

## Publicar en GitHub Pages

1. En GitHub: **New repository** → nombre `sonido-el-rio` → **Create repository**.
2. **Add file → Upload files** y arrastra **todo el contenido** de esta carpeta
   (`index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll`, `icons/`, `vendor/`) → **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch →
   Branch: `main` / `(root)` → Save**.
4. En 1 o 2 minutos la app queda en `https://TU-USUARIO.github.io/sonido-el-rio/`.

## Instalar

- **Android (Chrome):** abre el enlace → menú ⋮ → *Instalar app* (o el botón "Instalar app" de la página).
- **iPhone (Safari):** abre el enlace → Compartir → *Añadir a pantalla de inicio*.
- **Computadora (Chrome/Edge):** abre el enlace → ícono de instalar en la barra de direcciones.

Funciona sin internet después de la primera vez.

## Actualizar la app

Cambia los archivos en el repositorio y sube el número de `VERSION` en `sw.js`
(por ejemplo `sonido-2026-v2`) para que los teléfonos descarguen la versión nueva.

## Importante

- Los programas se guardan **en el navegador de cada aparato** (no se sincronizan entre
  teléfono y computadora). Usa **Copia de seguridad** y **Restaurar** para pasarlos de uno a otro.
- Si el repositorio es público, la lista de hermanos incluida en `index.html` también es pública.
