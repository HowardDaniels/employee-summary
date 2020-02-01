const Employee = require("../lib/Employee");
const app = require("../app.js");
const fs = require("fs");
describe("Testing if running", () => {
  describe("Testing getName()", () => {
    it("returns true if answers.name is logged", () => {
     app.askTeamMemberQuestions();
     fs.readFile("../output/index.html");
    });

    it("Incorrect guess returns false", () => {
      expect(new Employee("Carl").getName("Sheila")).toBe(false);
    });
  });

  describe("guessedCorrectly ", () => {
    it("returns true if name is the same", () => {
      const name = new Employee("Carl");
      name.getName("Carl");
      expect(name.guessedCorrectly()).toBe(true);
    });
    it("returns false if name is different", () => {
      const word = new Employee("Carl");
      name.getName("Sheila");
      expect(word.guessedCorrectly()).toBe(false);
    });
  });
});