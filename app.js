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

.then({role}) => {
    if(role = prompt.choices[0]){
        console.log(3);
    }
});