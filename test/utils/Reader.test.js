const Reader = require("./../../lib/utils/Reader");

describe("Tests para clase Reader", () => {
    test("Leer archivo json con la clase Reader", () => {
        const students = Reader.readJsonFile("students.json")

        expect(students).not.toBeUndefined();
        expect(typeof students).toBe("object");
    });
});