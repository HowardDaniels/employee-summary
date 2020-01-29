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
<link rel="stylesheet" href="../templates/assets/manager.css">
</head>
<body>
       <div class="row">
           <div class="col-md-3">
        <div class="row" id="top">
            <br>
            <p id="name">${answers.name}</p>
            <p id="role">Manager</p>
            <br>
        </div>
       <div class="row" id="bottom">
           <table id="infotable">
               <tr><td>ID: ${answers.ID}</td></tr>
               <tr><td>Office number: ${answers.officeNumber}</td></tr>
           </table>
       </div>
       </div>
       </div>
</body>
</html>`;

const managerRow = `<div class="row">
<div class="col-md-3">
<div class="row" id="top">
 <br>
 <p id="name">${answers.name}</p>
 <p id="role">Manager</p>
 <br>
</div>
<div class="row" id="bottom">
<table id="infotable">
    <tr><td>ID: ${answers.ID}</td></tr>
    <tr><td>Office number: ${answers.officeNumber}</td></tr>
</table>
</div>
</div>`;



  if (answers.engineers > 0){
    arr = [];
    for (i = 1; i < (answers.engineers + 1); i++){
      arr.push(
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
    arr.push(
      {
        type: "number",
        message: "How many interns would you like to add?",
        name: "interns"
      });

      const engineerNum = ((arr.length - 1) / 3);

inquirer
.prompt(arr)
.then(answers => {
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

    if (answers.interns > 0){
      arr2 = [];
      for (i = 1; i < (answers.interns + 1); i++){
        arr2.push({
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
       console.log(arr2);
       inquirer
       .prompt(arr2)
     
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