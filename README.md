# Projecto Code challenge para Semana 4

## Practica para el curso fullstack en launchx para la mision nodejs

Saludos dev aqui podras encontrar las descripcion del proyecto.
En este diagrama se puede ver como esta estructurado el proyecto:

```mermaid
  graph TD;
      server.js--Utiliza-->StudentsController.js;
      StudentsController.js--Utiliza-->StudentService.js;
      StudentService.js--Utiliza-->Reader.js;
      StudentService.js--Utiliza-->students.json;
```

El siguiente diagrama de muestra la estructura de las carpetas y archivos:

```mermaid
  graph TD;
      ./-->students.json;
      ./-->test/;
      ./-->lib/;
      lib/-->utils/;
      utils/-->Reader.js;
      lib/-->services/;
      services/-->StudentService.js;
      lib/-->controllers/;
      controllers/-->StudentsController.js;
      test/-->utils/;
      utils/-->Reader.test.js;
      test/-->services/;
      services/-->StudentService.test.js;
      test/-->controllers/;
      controllers/-->StudentsController.test.js;
```
