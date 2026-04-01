# Documentación mgmt-back

## 📌 Descripción
Backend de una aplicación de gestión de asistencia.

Permite:
- Registrar entrada y salida de usuarios
- Guardar historial de asistencia
- Consultar registros


## Tech Stack
- **Backend**: _NestJs_
- **ORM**: _Prisma_
- **BD**: _PostgreSql_
- **Documentación y testing**: _Swagger_
---
### Nestjs

Comandos básicos para el uso del framework
- *Iniciar servidor*
```bash
  npm run start:dev
```
- *Crear recurso*
```bash
  npm g resource nombreRecurso
``` 
Al crear un recurso lo que se crea son:
- Modulo
- Controlador
- Servicio
- Entidad
- Dto
  - Crear 
  - Actualizar

### Probar Endpoints

Este es el link que te permitirá probar los endpoints mientras desarrollas la aplicación, esto se 
inicializa al momento de [levantar el servidor](#nestjs)

[Probar Endpoints](http://localhost:3000/api)
