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
      ./-->./test/;
      ./-->./lib/;
      ./lib/-->./lib/utils/;
      ./lib/utils/-->Reader.js;
      ./lib/-->./lib/services/;
      ./lib/services/-->StudentService.js;
      ./lib/-->./lib/controllers/;
      ./lib/controllers/-->StudentsController.js;
      ./test/-->./test/utils/;
      ./test/utils/-->Reader.test.js;
      ./test/-->./test/services/;
      ./test/services/-->StudentService.test.js;
      ./test/-->./test/controllers/;
      ./test/controllers/-->StudentsController.test.js;
```

Se implemetaron los siguientes endpoints en la API

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/students` | `localhost:3000/v1/students` | Deberás obtener la lista de todos los estudiantes |
| `localhost:3000/v1/students/certification` | `localhost:3000/v1/students/certification` | Deberás obtener la la lista de todos los estudiantes con certificacion |
| `localhost:3000/v1/students/credits/:credits` | `localhost:3000/v1/students/credits/500` | Deberás obtener la lista de estudiantes con 500 creditos o mas |