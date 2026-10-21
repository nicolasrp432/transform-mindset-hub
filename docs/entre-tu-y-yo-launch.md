# Entre tú y yo · integración de prelanzamiento

## Alcance

Landing `/entre-tu-y-yo`, nueva tarjeta en `/herramientas`, navegación activa y enlace en footer. Se conservan los tres productos anteriores, los pagos existentes y el resto de la web. El producto se define aparte en `src/lib/memory-book.ts`: NO está en el catálogo cobrable.

## Experiencia

- Libro 3D mediante transformaciones CSS, girable por botón, ratón o teclado, sin WebGL ni nuevas dependencias.
- Cubierta y contracubierta exactas, renderizadas desde la edición 02 del PDF.
- Dos muestras de doble página: acuerdos/instrucciones y pregunta 09, identificadas como selección no consecutiva.
- Hojas con anverso/reverso, giro 3D desde el lomo y sombreado. Arrastre táctil o con ratón, botones y flechas de teclado. Los extremos se detienen sin volver al principio. Un gesto corto o cancelado devuelve la hoja a su posición; el desplazamiento vertical sigue disponible.
- Titulares, citas y etiquetas en marfil sobre verde bosque; textos secundarios claros y foco visible en las secciones oscuras.
- Selector accesible de los ocho encuentros y una pregunta real por encuentro.
- Ritual de música opcional, contenido del libro, preguntas frecuentes y CTA móvil.
- Reducción de movimiento respetada. Adaptaciones a 700 y 1000 px.
- Contacto explícito a WhatsApp/correo existentes: el visitante debe enviar el mensaje. Sin alta automática ni almacenamiento nuevo de datos.
- Open Graph con imagen local y origen resuelto desde NEXT_PUBLIC_BASE_URL o host de la petición. No se inventa un dominio.

## Archivos de imágenes

`public/images/entre-tu-y-yo/`. Solo portada, contraportada y cuatro páginas de muestra; no se publica el manuscrito completo ni el PDF comercial.

Los archivos page-040/page-041 muestran la pregunta 09 (páginas editoriales 28 y 29); page-006/page-007 muestran las páginas editoriales 5 y 6. Los nombres son identificadores de assets, no paginación del libro. Portada y grosor del modelo 3D son una visualización digital: los acabados no están confirmados.

## Verificación

Ejecutar `npm run build` y `node --experimental-strip-types --test tests/memory-book.test.mjs` (Node con soporte de type stripping). No requieren claves ni servicios de pago.

El supervisor de vista previa disponible añade flags de Vite (`--host`, `--strictPort`) a `next dev`, que Next.js no acepta. No se ha cambiado el servidor real del proyecto para sortear esa incompatibilidad. La revisión visual e interactiva en navegador queda pendiente en el despliegue/entorno habitual. No confundir build correcto con prueba visual realizada.

Actualización 21/10/2026: build de producción, TypeScript, lint de los componentes y cinco pruebas existentes correctos. La conexión al navegador no respondió, por lo que la revisión visual y táctil en dispositivos reales sigue pendiente. No atribuirle al build una validación visual.

Checklist manual pendiente: viewport 390/768/1440; no scroll horizontal; giro y vuelta de portada con teclado; ocho encuentros; arrastre de hojas en ambos sentidos, cancelación y navegación por teclado; FAQs; menú móvil; reduced motion; CTA fijo sin tapar footer; abrir WhatsApp y correo sin enviar mensajes; tarjeta en Herramientas; metadatos con origen del dominio real.

## Activar compras después

Confirmar precio final, países, impuestos, logística, stock/fecha, acabados y condiciones. Después añadir el producto al registro de pago, configurar dirección de envío, confirmación y cumplimiento; validar en modo prueba y cambiar todos los mensajes de prelanzamiento. No basta con sustituir un botón por «Comprar».

No se han contratado anuncios ni programado publicaciones. El kit de contenido se entrega por separado para revisión y publicación.
