const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");
const yesNo = ["Yes", "No"];
const roleChoices = ["Engineer", "Intern"];

inquirer.prompt([{
  type: "input",
  message: "Manager name:",
  name: "name"
},
{
  type: "number",
  message: "Manager ID:",
  name: "ID"
},
{
  type: "input",
  message: "Manager office number:",
  name: "officeNumber"
},
{
  type: "number",
  message: "How many engineers would you like to add?",
  name: "engineers"
}
])

.then(answers => {

  const managerProfile = `<html>
  <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="assets/manager.css">
  </head>
  <body>
         <div class="row">
             <div class="col-md-3">
          <div class="row" id="top">
              <br>
              <p id="name">${answers.name}</p>
              <p id="role">Manager</p>
              <p id="id">${answers.ID}</p>
              <br>
          </div>
         <div class="row" id="bottom">
             <table id="infotable">
                 <tr><td>ID: 123</td></tr>
                 <tr><td>ID: user@web.com</td></tr>
                 <tr><td>Office number: 456</td></tr>
             </table>
         </div>
         </div>
  </body>
</html>`;

  if (answers.engineers >= 0){
    arr = [];
    for (i = 1; i < (answers.engineers + 1); i++){
      arr.push(
      {
        type: "input",
        message: "Engineer #" + i  + "'s name:",
        name: "engineerName" + i,
      },
      {
        type: "input",
        message: "Engineer #" + i + "'s ID:",
        name: "engineerID" + i,
      },
      {
        type: "input",
        message: "Engineer #" + i + "'s GitHub:",
        name: "engineerGitHub" + i,
      });
    }
    arr.push(
      {
        type: "number",
        message: "How many interns would you like to add?",
        name: "interns"
      });

inquirer
.prompt(arr)
.then(answers => {
    if (answers.interns >= 0){
      arr2 = [];
      for (i = 1; i < (answers.interns + 1); i++){
        arr2.push({
         type: "input",
         message: "Intern #" + i  + "'s name:",
         name: "internName" + i,
       },
       {
         type: "input",
         message: "Intern #" + i + "'s ID:",
         name: "internID" + i,
       },
       {
         type: "input",
         message: "Intern #" + i + "'s current school:",
         name: "internCurrentSchool" + i,
       }
       );
       }
       console.log(arr2);
       inquirer
       .prompt(arr2)
     
   //      console.log("Profile of manager, engineers, and interns is ready.")
       
    }
    else {
      console.log("Profile of manager and engineers ready to view.");
    }

  });
}
  else {
    inquirer
    .prompt([
      {
      type: "number",
      message: "How many interns would you like to add?",
      name: "interns2"
      }
])
  .then(answers => {
    if (answers.interns2 >= 0){
      arr3 = [];
      for (i = 1; i < (answers.interns2 + 1); i++){
        arr3.push({
         type: "input",
         message: "Intern #" + i  + "'s name:",
         name: "internName" + i,
       },
       {
         type: "input",
         message: "Intern #" + i + "'s ID:",
         name: "internID" + i,
       },
       {
         type: "input",
         message: "Intern #" + i + "'s current school:",
         name: "internCurrentSchool" + i,
       }
       );
       }
       console.log(arr3);
       inquirer
       .prompt(arr3)
    }
  });
}
});