const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");
const choices = ["Engineer", "Intern", "Manager"];

inquirer
  .prompt([{
    type: "list",
    message: "Role:",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"]
  },
  {
    type: "input",
    message: "Email:",
    name: "email",
  }
])

.then(answers => {
  let EmployeeToWrite = "";
    if(answers.role === choices[0]){
        inquirer.prompt([{
          type: "input",
          message: "GitHub account:",
          name: "GitHub"
        }])
    }
    else if(answers.role === choices[1]){
      inquirer.prompt([{
        type: "input",
        message: "College:",
        name: "college"
      }])
    }
    else if(answers.role === choices[2]){
      inquirer.prompt([{
        type: "input",
        message: "Office number:",
        name: "officeNumber"
      }])
}
});