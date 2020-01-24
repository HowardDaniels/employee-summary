const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([{
    type: "list",
    message: "Role:",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"]
  }
])
/*
.then(function(role){
    if(role = prompt.choices[0]){
        console.log(3);
    }
}); */