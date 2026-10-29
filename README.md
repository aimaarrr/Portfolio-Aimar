# Portfolio de Aimar Canino Almeida

Web estática responsive construida con HTML, CSS y JavaScript, sin dependencias de compilación.

## Ejecutar localmente

1. Descomprime la carpeta.
2. Abre `index.html` en un navegador. Para una experiencia más fiable, ejecuta un servidor local desde esta carpeta:
   - Python: `python -m http.server 8000`
   - Abre `http://localhost:8000`

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `portfolio`).
2. Sube todos los archivos y carpetas de este proyecto, conservando la estructura.
3. En el repositorio, abre **Settings → Pages**.
4. En *Build and deployment*, selecciona **Deploy from a branch**, elige `main` y la carpeta `/ (root)` y guarda.
5. Espera a que GitHub Pages publique el sitio y usa la URL que muestre esa sección.

## Antes de publicarlo

- Confirma que quieres publicar el teléfono y correo visibles.
- Revisa los datos de formación y fechas del CV.
- Revisa que las descripciones de los proyectos representen fielmente tu contribución personal.
- El formulario de contacto no simula un envío: el botón abre el cliente de correo mediante `mailto:`.
- El CV se sirve como PDF descargable desde `assets/cv-aimar.pdf`.

## Estructura

- `index.html`: contenido semántico y metadatos SEO.
- `styles.css`: diseño responsive, accesibilidad visual y animaciones reducidas según preferencia del sistema.
- `script.js`: navegación móvil, copia de correo y animaciones de entrada.
- `assets/`: foto, CV PDF y favicon.
