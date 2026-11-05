---
name: bootstrap-frontend
description: "Crear o modificar interfaces web de este proyecto usando obligatoriamente Bootstrap 5.3.8 para estilos y componentes. Activar al diseñar páginas, layouts o interacciones frontend con Bootstrap."
---

# Frontend obligatorio con Bootstrap 5.3.8

## Requisito

Usa obligatoriamente Bootstrap **5.3.8** como framework de estilos y componentes en todo trabajo de interfaz web de este proyecto. Esta es la versión aprobada para el proyecto; no cambies a Bootstrap 6, otra versión de Bootstrap ni otro framework sin autorización expresa. Prioriza sus clases, sistema de grid, utilidades y componentes antes de escribir CSS o JavaScript personalizados.

## Procedimiento

1. Revisa la estructura, dependencias y convenciones del proyecto antes de modificarlo.
2. Usa la versión exacta `5.3.8`, fijada en el gestor de paquetes o en las URLs CDN; no uses rangos ni alias como `latest`.
3. Consulta la [documentación oficial de instalación de Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) para confirmar las instrucciones. En proyectos con npm, instala `bootstrap@5.3.8`. En páginas estáticas sin gestor, usa el CDN oficial documentado:

   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
   ```

4. Construye el layout con el contenedor, grid responsive, utilidades y componentes de Bootstrap. Usa atributos y marcado requeridos por la versión verificada.
5. Mantén separados el HTML, CSS y JavaScript conforme a la organización existente. Reserva el CSS propio para identidad visual o necesidades no cubiertas por Bootstrap; no dupliques reglas y utilidades del framework.
6. Carga JavaScript de Bootstrap solo cuando la página utilice componentes interactivos que lo requieran. Si hace falta en una página estática, usa el bundle 5.3.8 oficial documentado, con su hash SRI. Evita añadir una segunda copia si ya está incluida.
7. Conserva accesibilidad: HTML semántico, etiquetas accesibles, foco visible, contraste suficiente y uso por teclado. No uses clases de Bootstrap como sustituto de semántica adecuada.
8. Comprueba rutas, dependencias, consola y comportamiento responsive en móvil, tableta y escritorio. Valida los cambios con las herramientas del proyecto.

## Límites

- No mezcles Bootstrap con otro framework de UI sin autorización expresa.
- No copies archivos de distribución ni dependencias de una versión diferente para simular Bootstrap 5.3.8.
- Respeta el tema visual solicitado; Bootstrap es obligatorio como base y no significa que debas dejar los estilos predeterminados sin adaptar.
