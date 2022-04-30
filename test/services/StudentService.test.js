const StudentService = require("./../../lib/services/StudentService");

describe("Tests para clase StudentService", () => {
    test("Probar el metodo estatico getStudents() ", () => {
        const students = StudentService.getStudents();

        expect(students).not.toBeUndefined();
        expect(typeof students).toBe("object");
    });

    test("Probar el metodo estatico getStudentsWithCertification() ", () => {
        const studentsCertified = StudentService.getStudentsWithCertification();

        expect(studentsCertified).not.toBeUndefined();
        expect(typeof studentsCertified).toBe("object");
        expect(studentsCertified[0].haveCertification).toBe(true);
    });

    test("Probar el metodo estatico getStudentsWithEqualOrMoreCredits(credits) ", () => {
        const credits = 500;
        const studentsWithEqualOrMoreCredits = StudentService.getStudentsWithEqualOrMoreCredits(credits);

        expect(studentsWithEqualOrMoreCredits).not.toBeUndefined();
        expect(typeof studentsWithEqualOrMoreCredits).toBe("object");
        expect(studentsWithEqualOrMoreCredits[0].credits).toBeGreaterThanOrEqual(500);
    });

});