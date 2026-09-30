# Ainara · Sage Editorial

Rediseño visual y de experiencia sobre el commit `98030152a30f8a56841a50c1d912891c4443bd87`, en la rama `codex/ainara-sage-editorial`.

## Análisis y dirección

El proyecto ya contiene sesiones, autoevaluación, recursos gratuitos, catálogo, formaciones, MITRA, asistente y checkout. El rediseño mantiene esa arquitectura y utiliza el sistema visual entregado: Forest Deep #3D4A35, Sage Green #6B7755, Cream Paper #EDE5D4, Off White #F5F0E3; serif editorial e Inter, fotografía real desaturada, líneas y espacio en lugar de efectos decorativos.

- Inicio: composición editorial, retrato de Ainara y selector de necesidades que lleva a las rutas existentes.
- Conoce a Ainara: información de enfoque, formación y primera conversación, con pestañas accesibles.
- Sesiones: presentación humana, proceso y agenda/WhatsApp originales.
- Recursos: catálogo, MITRA y formulario de descarga, con etiquetas asociadas y errores claros.
- Autoevaluación: cinco preguntas, elección explícita y continuación, navegación atrás, edición del resumen, datos opcionales y estado de guardado veraz.
- Testimonios: textos ya existentes, columnas con desplazamiento continuo original, pausa y opción de lectura manual.
- Formaciones y páginas de venta: paleta y componentes compartidos coherentes. Catálogo, precios, garantías, rutas, claves de producto y checkout conservados.
- Menú móvil con cierre Escape y control del foco, enlace para saltar al contenido, movimiento reducido. Se recupera el cursor animado original en dispositivos con puntero fino; se mantiene el cursor nativo en táctil y con movimiento reducido.
- Pie de página: número de WhatsApp real de la configuración existente. Se retiran enlaces legales que ya apuntaban a rutas inexistentes; falta incorporar sus documentos reales antes de producción.

## Integraciones conservadas

No se modifican `src/app/actions/*`, `src/lib/insforge.ts`, `src/app/api/*`, `src/lib/stripe.ts`, `src/lib/products.ts` ni las variables de entorno. El proyecto sigue en Next.js, React y TypeScript; dependencias y lockfile originales sin cambios.

El formulario original guardaba contactos pero no enviaba un correo. La nueva experiencia evita anunciar un diagnóstico o email automático que ese código no genera. Sus cinco preguntas se presentan como reflexión, sin clasificación clínica.

La acción existente de evaluación omite contactos duplicados; la interfaz lo indica sin asegurar que las nuevas respuestas se guardaron. Sus retornos `_warning` se tratan como fallo de guardado, con reintento y opción de continuar sin compartir datos. En recursos, el PDF sigue disponible si falla el registro, pero el fallo se comunica.

## Revisión privada en Sites

Sites utiliza una copia de la aplicación adaptada a su runtime. Allí el guardado de contactos y los pagos están explícitamente desactivados, sin claves de producción ni respuestas de éxito ficticias. Es una revisión de diseño y navegación; el código de esta rama conserva las integraciones de Next.js para el despliegue original.

## Validación

- `npx tsc --noEmit`: correcto.
- `npm run build`: correcto; 20 páginas generadas y rutas API conservadas.
- No se han realizado pagos, enviado contactos reales ni modificado producción.
- No se dispone de validación visual en navegador en este entorno. Antes de integrar, revisar la vista privada en móvil y escritorio, en especial banners de venta y formularios.

## Pendientes anteriores al rediseño

Los testimonios y credenciales proceden del repositorio y requieren validación editorial por Ainara. La acción de contactos conserva sus retornos de fallback y su tratamiento de duplicados; no se ha cambiado el backend. Antes de producción, comprobar el guardado en InsForge con el entorno real y las condiciones/política de privacidad del negocio. No hay emails automáticos nuevos.

## Movimiento restaurado

La rama original utiliza Framer Motion, no GSAP. Se recuperan el cursor con muelles, el CTA magnético, las entradas escalonadas de la portada y los reveals al entrar en el viewport, adaptados a la composición editorial. Los efectos respetan movimiento reducido y limpian sus listeners/observadores al cambiar de ruta. El contenido permanece visible si JavaScript no se ejecuta.
