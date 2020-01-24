const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");
const Engineer = require("./test/Engineer.test");
const Intern = require("./test/Intern.test");
const Manager = require("./test/Manager.test");

inquirer
  .prompt([{
    type: "list",
    message: "Role:",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"]
  }
])

.then(role => {
  let EmployeeToWrite = "";
    if(answers.role === answers.choices[0]){
        EmployeeToWrite = Engineer;
    }
    else if(answers.role === answers.choices[1]){
      EmployeeToWrite = Intern;
    }
    else if(answers.role === answers.choices[2]){
      EmployeeToWrite = Manager;
    }
});