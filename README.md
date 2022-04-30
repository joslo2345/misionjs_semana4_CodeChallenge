# Projecto Code challenge para Semana 4

## Practica para el curso fullstack en launchx para la mision nodejs

Saludos dev aqui podras encontrar las descripcion del proyecto.
En este diagrama se puede ver como esta estructurado el proyecto

```mermaid
  graph TD;
      server.js--Utiliza-->StudentsController.js;
      StudentsController.js--Utiliza-->StudentService.js
      StudentService.js--Utiliza-->Reader.js
      StudentService.js--Utiliza-->students.json
```

