# Cuaderno gratuito: activación y seguimiento

## Estado y bloqueo de publicación

No fusionar hasta comprobar la base de datos. El 25/10/2026 la URL de InsForge configurada en Vercel respondió HTTP 503 con `No backend services available for app: duw9jjk8`. Las variables INSFORGE_URL e INSFORGE_SECRET_KEY existen; su presencia no demuestra que el servicio o la clave funcionen. No se modificaron credenciales ni se recuperó el servicio.

El formulario anterior devolvía éxito incluso cuando fallaba el INSERT. Eso explica por qué se entregaba el recurso sin registrar el contacto. Los contactos cuyo INSERT falló no pueden recuperarse desde esta implementación.

## Antes de publicar

1. Entrar en el proyecto existente de InsForge y resolver su indisponibilidad. No crear otro proyecto ni cambiar de proveedor sin decidir la migración.
2. Confirmar roles `anon` y `authenticated`, y ejecutar `db/migrations/20261024_workbook_requests.sql` desde la consola administradora. Es aditiva y no modifica `leads`.
3. Configurar una clave de inserción con mínimos permisos como `INSFORGE_ANON_KEY`. El código admite el nombre heredado `INSFORGE_SECRET_KEY`; comprobar que realmente corresponde a una clave válida para el SDK. No usar permisos administrativos en el navegador.
4. Añadir `LEAD_DOWNLOAD_SECRET`, aleatorio de al menos 32 caracteres, como secreto solo de servidor. Usar valores independientes en Preview y Production. No guardar claves en git.
5. Probar Preview con una base aislada y datos sintéticos: sin permiso de marketing debe guardar `resource_only`; con permiso, `permission_to_verify`. Nombre y correo deben existir en la consola antes de considerar válido el ensayo.
6. Comprobar que un visitante no puede listar, actualizar o borrar registros. RLS debe mantenerse activa. Validar también errores de conexión, clave inválida, doble envío, expiración y reintento de descarga.
7. Configurar límites de peticiones/antibot antes de campañas: el campo trampa no sustituye una protección de volumen. No registrar nombres, correos ni respuestas del cuaderno en logs.
8. Confirmar identidad legal completa del responsable, condiciones de proveedores, transferencias y plazos de conservación en `/privacidad-recursos` antes del lanzamiento. El texto incluido no certifica cumplimiento legal.
9. Publicar y repetir una prueba controlada de registro + descarga en producción. No se han enviado campañas ni habilitado correo automático.

## Cómo trabajar los contactos

La tabla privada `workbook_requests` conserva nombre, correo normalizado, recurso, origen, fecha y textos/versiones de los permisos. Se consulta desde la consola autenticada de InsForge; no existe un listado público.

- `resource_only`: solicitud del cuaderno, sin autorización para marketing. No añadir a campañas.
- `permission_to_verify`: marcó voluntariamente seguimiento. Verificar la titularidad del correo mediante un proveedor con doble confirmación antes de activar campañas; esta integración todavía no está conectada.
- `confirmed`: solo tras registrar confirmación verificable. Guardar `confirmed_at`, `last_contacted_at` y `next_contact_at`.
- `unsubscribed`: excluir el correo de cualquier campaña, también si tiene solicitudes repetidas. Mantener una lista de supresión por correo en el proveedor; una nueva descarga no reactiva por sí sola a una persona dada de baja.

Propuesta de secuencia, pendiente de aprobación y configuración: bienvenida con una indicación sencilla para usar el cuaderno; a los tres días, apoyo para elegir una acción pequeña; a los siete, invitación opcional a explorar la guía, Re-Conéctate o una sesión. Incluir baja fácil en cada correo. No pedir respuestas íntimas del cuaderno ni prometer resultados.

## Recurso y verificación

PDF A5 original de 10 páginas: `private-resources/de-la-pausa-al-primer-paso.pdf`. Regenerar con `python3 scripts/create-free-workbook.py` (ReportLab, PyMuPDF, Pillow y fuentes DejaVu).

La ruta de descarga usa cookie firmada HttpOnly de una hora, emitida solo después de guardar, sin datos personales. El PDF se incluye en el paquete de la función mediante tracing de Next.js. Esto controla el recorrido de la web, no es DRM: un recurso gratuito puede compartirse y un repositorio público expone sus archivos.

Pruebas locales: `node --test tests/*.test.mjs` (13 correctas), lint de archivos nuevos y `npm run build`. Estas pruebas no acreditan la integración real con InsForge. El aviso preexistente sobre metadataBase sigue pendiente fuera de este alcance.
