# Sonido · El Río Panajachel

Programa de sonido, video, plataforma y micrófonos con asignación automática.
Sube los PDFs de Vida y Ministerio y Discursos Públicos, y el programa se genera
sin traslapes. Se guarda por mes y se instala como app en celular y computadora.

## Publicar en GitHub Pages

1. En GitHub: **New repository** → nombre `sonido-el-rio` → **Create repository**.
2. **Add file → Upload files** y arrastra **todo el contenido** de esta carpeta
   (`index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll`, `google-apps-script.js`, `icons/`, `vendor/`) → **Commit changes**.
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

## Que el programa aparezca solo en el teléfono y la computadora

Los programas se guardan en un archivo de **tu Google Drive** y todos tus aparatos se actualizan solos
(al abrir la app, al volver a ella y cada minuto; los cambios se envían en 1-2 segundos).

1. Entra a <https://script.google.com> con tu cuenta de Google → **Nuevo proyecto**.
2. Borra lo que haya y pega el contenido de `google-apps-script.js` (en la app: *Sincronizar → Copiar script*).
   Cambia la clave `sonido2026` por una tuya.
3. **Implementar → Nueva implementación → Aplicación web** · Ejecutar como: **Yo** · Acceso: **Cualquier persona**.
   Autoriza los permisos y copia la URL que termina en `/exec`.
4. En la app: **Sincronizar** → pega la URL y la clave → **Guardar y sincronizar**.
5. En cada otro aparato: toca **Copiar enlace** en esa misma ventana y ábrelo allá. Queda conectado solo.

Si dos aparatos cambian el mismo mes a la vez, gana el cambio más reciente.
Si cambias el script, crea una **nueva implementación** y actualiza la URL.

## Descargar el mes como imagen

Botón **Descargar mes (imagen)**: guarda un PNG con la tabla del mes (mismo formato de tu hoja de Excel),
listo para mandar por WhatsApp. Las tarjetas de recordatorio siguen en "Recordatorios para compartir".

## Importante

- Sin la sincronización, los programas quedan solo en el navegador de cada aparato.
  **Copia de seguridad** y **Restaurar** sirven para pasarlos a mano.
- Si el repositorio es público, la lista de hermanos incluida en `index.html` también es pública.
