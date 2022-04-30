const StudentService = require("./../services/StudentService");

class StudentsController{
    static getStudents(){
        const students = StudentService.getStudents();
        return students;
    }

    static getStudentsWithCertification(){
        const studentsCertified = StudentService.getStudentsWithCertification();
        return studentsCertified;
    }
    
    static getStudentsWithEqualOrMoreCredits(credits){
        const studentsWithEqualOrMoreCredits = StudentService.getStudentsWithEqualOrMoreCredits(credits);
        return studentsWithEqualOrMoreCredits;
    }
}

module.exports = StudentsController;