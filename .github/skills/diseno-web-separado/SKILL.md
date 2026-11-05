---
name: diseno-web-separado
description: "Diseñar, crear o modificar páginas web con HTML, CSS y JavaScript separados. Usar cuando se solicite estructurar una web, organizar archivos frontend o mantener estilos y lógica en carpetas independientes."
---

# Diseño web con archivos separados

## Objetivo

Crear y modificar páginas web sencillas con una separación clara entre estructura, presentación y comportamiento:

```text
proyecto/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Procedimiento

1. Revisa la estructura existente y reutiliza sus convenciones si ya están establecidas.
2. Mantén el marcado de la página en archivos `.html` y guarda las hojas de estilo dentro de `css/`.
3. Guarda el código JavaScript dentro de `js/`.
4. Enlaza CSS y JavaScript desde el HTML usando rutas relativas correctas, por ejemplo:

   ```html
   <link rel="stylesheet" href="css/styles.css">
   <script src="js/main.js" defer></script>
   ```

5. Evita CSS y JavaScript en línea. No agregues etiquetas `<style>` ni manejadores de eventos `on...` al HTML; implementa los estilos en las hojas CSS y la interacción en los archivos JS.
6. Si la página requiere más archivos, usa nombres descriptivos y conserva la separación por tipo: HTML para estructura, CSS para presentación y JavaScript para comportamiento.
7. Diseña de forma adaptable, empezando por pantallas pequeñas. Usa unidades flexibles y funciones como `min()`, `max()` o `clamp()` cuando sean apropiadas; evita anchos fijos que provoquen desbordamientos.
8. Añade media queries en CSS cuando el contenido o la disposición necesiten cambiar en un punto de quiebre. No dependas de un único tamaño de pantalla.
9. Asegúrate de que imágenes, videos y otros medios no excedan el ancho de su contenedor; conserva sus proporciones.
10. Comprueba que no haya desplazamiento horizontal y que el contenido siga siendo legible y utilizable en móvil, tableta y escritorio. Verifica las rutas de archivos y valida la página con las herramientas disponibles en el proyecto.

## Consideraciones

- No muevas ni renombres archivos existentes sin comprobar antes sus referencias y actualizar todos los enlaces afectados.
- Si el proyecto usa un framework o una estructura distinta ya configurada, respeta esa arquitectura en vez de imponer esta estructura básica.
- Mantén la página accesible y adaptable a distintos tamaños de pantalla; incluye el meta viewport en el HTML y usa puntos de quiebre según el contenido, no según modelos concretos de dispositivos.
