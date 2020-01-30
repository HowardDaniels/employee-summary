const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");
const yesNo = ["Yes", "No"];
const roleChoices = ["Engineer", "Intern"];

/* This prompts the user about the manager (these are required fields).
The user is then asked how many engineers he or she would like to add to the profile. */

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

.then(ManagerQuestions => {

  /* This is the manager profile (used only if the user inputs a manager profile. */

  const managerProfile = `<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="../templates/assets/manager.css">
</head>
<body>
       <div class="row">
           <div class="col-md-3">
        <div class="row" id="top">
            <br>
            <p id="name">${ManagerQuestions.name}</p>
            <p id="role">Manager</p>
            <br>
        </div>
       <div class="row" id="bottom">
           <table id="infotable">
               <tr><td>ID: ${ManagerQuestions.ID}</td></tr>
               <tr><td>Office number: ${ManagerQuestions.officeNumber}</td></tr>
           </table>
       </div>
       </div>
       </div>
</body>
</html>`;

/* This is the row for the manager's data, to be used if the user chooses to add engineers and/or interns
in addition to a manager. */

const managerRow = `<div class="row">
<div class="col-md-3">
<div class="row" id="top">
 <br>
 <p id="name">${ManagerQuestions.name}</p>
 <p id="role">Manager</p>
 <br>
</div>
<div class="row" id="bottom">
<table id="infotable">
    <tr><td>ID: ${ManagerQuestions.ID}</td></tr>
    <tr><td>Office number: ${ManagerQuestions.officeNumber}</td></tr>
</table>
</div>
</div>`;

/* If the manager chooses to add engineer, the following prompts are asked of the user, looped through a
certain number of times depending on how many engineers the user wishes to provide. */

  if (ManagerQuestions.engineers > 0){
    engineerQuestions = [];
    console.log("STARTS HERE")
    console.timeLog(JSON.stringify(ManagerQuestions.engineers))
    console.log(ManagerQuestions)
    for (i = 1; i < (ManagerQuestions.engineers + 1); i++){
        engineerQuestions.push(
      {
        type: "input",
        message: "Engineer #" + i  + "'s name:",
        name: "engineerName" + i,
      },
      {
        type: "number",
        message: "Engineer #" + i + "'s ID:",
        name: "engineerID" + i,
      },
      {
        type: "input",
        message: "Engineer #" + i + "'s GitHub:",
        name: "engineerGitHub" + i,
      });
    }

/* This question asks how many interns the user would like to provide, and is only asked once. */

    engineerQuestions.push(
      {
        type: "number",
        message: "How many interns would you like to add?",
        name: "interns"
      });
/*
      const engineerNum = ((engineerQuestions.length - 1) / 3);
*/
inquirer
.prompt(engineerQuestions)
.then(engineerQuestions => {
  console.log("MY PRINT")
  console.log(engineerQuestions);
/*

var engineerNameNumbers = [];
var engineerIDNumbers = [];
var engineerGitHubNumbers = [];
var engineerRows = [];
  for (i = 1; i < (engineerNum + 1); i++){
    engineerNameNumbers.push("answers.engineerName" + i)
    engineerIDNumbers.push("answers.engineerID" + i)
    engineerGitHubNumbers.push("answers.engineerGitHub" + i)
  }

  console.log(engineerNameNumbers);
  console.log(engineerIDNumbers);
  console.log(engineerGitHubNumbers);

  for (i = 0; i < (engineerNum); i++){
    engineerRows.push(`<div class="row">
    <div class="col-md-3">
    <div class="row" id="top">
     <br>
     <p id="name">${engineerNameNumbers[i]}</p>
     ${answers.engineerGithub}
     <p id="role">Engineer</p>
     <br>
    </div>
    <div class="row" id="bottom">
    <table id="infotable">
        <tr><td>ID: ${engineerIDNumbers[i]}</td></tr>
        <tr><td>GitHub: ${engineerGitHubNumbers[i]}</td></tr>
    </table>
    </div>
    </div>
    </div>`);
  }

const formattedEngineerRows = engineerRows.join("");

  console.log(engineerRows);

  const engineerAndManagerProfile = `<html>
  <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="../templates/assets/manager.css">
  </head>
  <body>
  ${managerRow}
        ${formattedEngineerRows}
  </body>
  </html>`;
*/

/* Prompts the user about the interns. */

    if (engineerQuestions.interns > 0){
      internQuestions = [];
      for (i = 1; i < (engineerQuestions.interns + 1); i++){
        internQuestions.push({
         type: "input",
         message: "Intern #" + i  + "'s name:",
         name: "internName" + i,
       },
       {
         type: "number",
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
       console.log(internQuestions);
       inquirer
       .prompt(internQuestions);
     
   //      console.log("Profile of manager, engineers, and interns is ready.")
       
    }
    else {
      fs.writeFile("output/index.html", engineerAndManagerProfile, function(err) {
        if (err) {
          throw err;
        }
      });
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
    if (answers.interns2 > 0){
      arr3 = [];
      for (i = 1; i < (answers.interns2 + 1); i++){
        arr3.push({
         type: "input",
         message: "Intern #" + i  + "'s name:",
         name: "internName" + i,
       },
       {
         type: "number",
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

    else {
    
    fs.writeFile("output/index.html", managerProfile, function(err) {
      if (err) {
        throw err;
      }
    });
    }
  });
}
});