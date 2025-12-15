# Lotería de Navidad 2025

Este proyecto contiene una página web responsiva para inscribir a los participantes en la **Lotería de Navidad 2025**. Incluye un formulario en el que se puede especificar el nombre y el número de décimos (incluso fracciones) y calcula automáticamente el importe a pagar. Los datos se almacenan en una hoja de cálculo de Google y se envía un correo al organizador.

## Estructura de archivos

- **index.html** – Página principal del sitio con el formulario de inscripción.
- **style.css** – Hoja de estilos con diseño navideño moderno y responsivo.
- **script.js** – Código JavaScript para calcular el total y validar el formulario.
- **header.png** – Imagen de cabecera (festiva) para la página.
- **google_app_script.gs** – Script de Google Apps que maneja las inscripciones, almacena los datos en Google Sheets y envía notificaciones por email.
- **README.md** – Este archivo de documentación.

## Pasos para desplegar

1. **Crea una Google Sheet**: Inicia sesión en tu Google Drive, crea una nueva hoja de cálculo y ponle un nombre (por ejemplo “Lotería Navidad 2025”). Asegúrate de que la primera fila tenga los encabezados: `Fecha`, `Nombre`, `Décimos`.
2. **Copia el ID de la hoja**: El ID es la parte de la URL entre `/d/` y `/edit`.
3. **Configura el script de Apps Script**:
   - Ve a [Google Apps Script](https://script.google.com/) y crea un nuevo proyecto.
   - Pega el contenido de `google_app_script.gs` en el editor.
   - Sustituye `SPREADSHEET_ID` por el ID de tu hoja.
   - Sustituye `TU_CORREO@ejemplo.com` por tu dirección de correo (o la del organizador).
   - Haz clic en `Deploy` → `New deployment`, selecciona “Web app”, elige “Ejecutar como yo” y “Acceso: Cualquiera”. Guarda y copia la URL de la Web App.
4. **Actualiza el formulario HTML**:
   - Abre `index.html` y reemplaza `REEMPLAZAR_URL_DEL_SCRIPT` en el atributo `action` del formulario por la URL de la Web App que has desplegado.
5. **Aloja la página**:
   - Puedes publicar el sitio estático usando GitHub Pages. Sube todo el directorio `lottery_navidad_2025` a un repositorio público o privado.
   - Habilita GitHub Pages en la configuración del repositorio, indicando la rama principal (main) y la carpeta raíz (o `/docs` si la usas).
6. **Comparte la URL**: Distribuye el enlace entre tus amigos; solo quienes tengan el enlace podrán inscribirse.

¡Y listo! Tendrás un sitio moderno y festivo para gestionar las participaciones de la **Lotería de Navidad 2025**.