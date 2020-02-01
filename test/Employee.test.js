const Employee = require("../lib/Employee");

describe("Name", () => {
  describe("provide name", () => {
    it("String returns true", () => {
      expect(new Employee("Carl").getName("Carl")).toBe(true);
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