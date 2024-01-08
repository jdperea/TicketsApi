# API de Gestión de Tickets

Esta API permite la creación, eliminación, edición y recuperación de tickets, con funcionalidades de paginación y filtrado.

## Pruebas Locales con Postman

### Requisitos Previos

Para ejecutar y probar la API localmente, necesitarás:

- Docker
- Postman

### Configuración con Docker

1. **Levantar el servicio de MongoDB y la API:**

Utiliza Docker Compose para iniciar los servicios necesarios. Asegúrate de estar en el directorio raíz del proyecto y ejecuta:

```bash
docker-compose up --build
```

Esto iniciará los contenedores de MongoDB y de la aplicación Node.js.

### Uso de Postman para Pruebas

Una vez que los servicios estén en funcionamiento, puedes usar Postman para enviar solicitudes a la API.

1. **Abrir Postman y configurar las varibales de  entorno:**

   - Crea un nuevo entorno en Postman.
   - Agrega una variable de entorno llamada `url` y asigna como valor `http://localhost:3000`.

2. **Crear un nuevo ticket:**

   - Método: `POST`
   - URL: `{{url}}/tickets`
   - Body: Selecciona `raw` y `JSON` y agrega el siguiente contenido:

```json
{
"user": "nombre_usuario",
"status": "abierto"
}
```

3. **Obtener tickets:**

   - Método: `GET`
   - URL: `{{url}}/tickets`
   - El sistema cuenta con una pequeña herramienta

4. **Actualizar un ticket:**

   - Método: `PUT`
   - URL: `{{url}}/tickets/<TICKET_ID>`
   - Body: Selecciona `raw` y `JSON` y agrega el siguiente contenido:
   - Reemplaza `<TICKET_ID>` con el ID real del ticket que deseas actualizar.

```json
{
"status": "cerrado"
}
```
5. **Eliminar un ticket:**

   - Método: `DELETE`
   - URL: `{{url}}/tickets/<TICKET_ID>`
   - Reemplaza `<TICKET_ID>` con el ID real del ticket que deseas eliminar.
