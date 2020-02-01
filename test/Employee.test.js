const Employee = require("../lib/Employee");
const app = require("../app.js");
const fs = require("fs");
describe("Testing if running", () => {
  describe("Testing askTeamMemberQuestions()", () => {
    /* asyncAway if doesn't work the first time*/

      it("Incorrect guess returns false", () => {
        app.askTeamMemberQuestions();
        var fileData;
        fs.readFile("../employee-summary/output/index.html", "utf8", function(err, data){
          if (err) throw err
        fileData = data;
        });
        expect(typeof fileData).toEqual("string");
      });


  
    

  });
/*
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
  */
});