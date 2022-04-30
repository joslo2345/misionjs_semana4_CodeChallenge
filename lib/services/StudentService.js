const Reader = require("./../utils/Reader");

class StudentService{
    static getStudents(){
        const students = Reader.readJsonFile('students.json');
        return students;
    }

    static getStudentsWithCertification(){
        const students = Reader.readJsonFile("students.json");
        const studentsCertified = students.filter((student) => student.haveCertification == true);
        return studentsCertified;
    }

    static getStudentsWithEqualOrMoreCredits(credits){
        const students = Reader.readJsonFile("students.json");
        const studentsWithEqualOrMoreCredits = students.filter((student) => student.credits >= credits);
        return studentsWithEqualOrMoreCredits;
    }
}

module.exports = StudentService