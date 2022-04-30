const express = require("express");
const { response } = require("express");
const StudentsController = require("./controllers/StudentsController");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Students API welcome!"});
});

app.get("/v1/students", (request, response) => {
    const students = StudentsController.getStudents();
    response.json(students);
});

app.get("/v1/students/certification", (request,response) => {
    const studentsCertified = StudentsController.getStudentsWithCertification();
    response.json(studentsCertified);
});

app.get("/v1/students/credits/:credits", (request,response) => {
    const credits = request.params.credits;
    const studentsWithEqualOrMoreCredits = StudentsController.getStudentsWithEqualOrMoreCredits(credits);
    response.json(studentsWithEqualOrMoreCredits);
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});