# Prototipo demostrativo - Sistema Integrado de Administración de Personal SEDEGES

## Objetivo
Mostrar el alcance funcional propuesto sin instalar servidor. La idea central es **registrar una vez, reutilizar, aprobar, generar documentos y conservar historial**.

## Cómo abrir
1. Descomprima el ZIP.
2. Abra `index.html` en Chrome, Edge o Firefox.
3. No requiere servidor, base de datos ni instalación adicional.

## Tecnologías de esta demostración
- HTML5
- CSS3
- JavaScript
- Bootstrap / Gentelella (base visual)
- Chart.js
- localStorage para simular persistencia de cambios del demo

## Módulos visibles
1. Administración y Seguridad
2. Kardex de Personal
3. Recursos Humanos / Memorándums y POAI
4. Control de Personal
5. Planillas y Remuneraciones
6. Portal del Servidor Público
7. Reportes y Auditoría

## Ajustes funcionales relevantes
- **Nómina de Personal antes del Expediente**: búsqueda, filtros y ficha resumen mediante el botón de ojo.
- **Ficha Resumen compacta**: CI, ítem, cargo, dependencia, asignación base, fecha de asignación, inamovilidad y comisión actual cuando corresponda.
- **Inamovilidad**: se visualiza Sí/No y, solo si corresponde, el motivo de ejemplo.
- **Asignación y comisión se separan**: la asignación muestra el lugar base del servidor; la comisión es temporal y muestra destino, fecha de inicio y fecha de fin.
- **Historial de Comisiones independiente**: consulta exclusiva de comisiones por servidor, sin mezclarlas con la trayectoria institucional base.
- **Memorándums sin estado**: una vez emitidos se consideran formalizados. La anulación se representa mediante un nuevo memorándum de anulación vinculado al anterior.
- **Expediente único**: Hoja de Vida y Familia/Parentesco alimentan la Ficha Personal sin volver a pedir la misma información.
- **Ítem / POAI 2026**: detalle del puesto, formación, experiencia y funciones requeridas para consulta visual.
- **Altas/Bajas CNS, vacaciones, certificados y accidentes**: reutilizan la información ya registrada del servidor.

## Datos demostrativos
Los nombres, CI, ítems, sueldos, memorándums, movimientos y demás datos son **ficticios**, aunque fueron preparados para verse realistas en una presentación.

## POAI
La demostración contiene perfiles POAI 2026 ficticios estructurados con formación requerida, experiencia general, experiencia específica y funciones principales. Deben sustituirse por los datos institucionales cuando se disponga del archivo oficial `PERFILES POAI 2026.xlsx`.

## Nota técnica
Este ZIP es una demostración visual y funcional de alcance. La versión productiva propuesta puede implementarse con PostgreSQL/PostgREST y controles reales de autenticación, permisos, auditoría y persistencia.


## Funcionalidad de demostración V3
- Selector de rol para Administrador, Kardex, RR.HH., Control de Personal, Planillas, Jefe/Responsable y Servidor Público.
- Bandeja de pendientes/notificaciones.
- Usuarios con creación, edición, permisos y habilitación/inhabilitación.
- Ítems y POAI con creación, edición y habilitación/inhabilitación.
- Persistencia local de los principales cambios durante la demostración.
- Botón para restablecer los datos iniciales.
- Guía de recorrido para presentar el sistema de principio a fin.
