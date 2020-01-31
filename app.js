const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");

const teamMemberQuestions = [{
      
  type: "input",
  message: "Team member's name:",
  name: "teamMemberName"
},
{
  type: "number",
  message: "Team member's ID number:",
  name: "teamMemberID"
},
{
  type: "list",
  message: "Team member's role:",
  name: "role",
  choices: ["Engineer", "Intern"]
}];

const GitHubQuestion = {
  type: "input",
  message: "Engineer's GitHub username:",
  name: "GitHub"
}

const currentSchoolQuestion = {
  type: "input",
  message: "Intern's current school:",
  name: "currentSchool"
}

const askAgain = {
  type: "list",
  message: "Would you like to add another team member?",
  name: "addAnotherTeamMember",
  choices: ["Yes", "No"]
}

const gitAskAgain = [GitHubQuestion, askAgain];
const schoolAskAgain = [currentSchoolQuestion, askAgain];

function askTeamMemberQuestions(){
  inquirer
  .prompt(teamMemberQuestions)
  .then(teamMemberQuestions => {
    console.log(teamMemberQuestions.role)
    if (teamMemberQuestions.role == "Engineer"){
/* HTML Code #3: Engineer info in HTML (minus the GitHub account)  */
      var engineerRow =

      `<br>
      <div class="row">
                 <div class="col-md-3">
              <div class="row" id="top">
                  <br>
                  <p id="name">${teamMemberRoleQuestions.teamMemberName}</p>
                  <p id="role">Engineer</p>
                  <br>
              </div>
             <div class="row" id="bottom">
                 <table id="infotable">
                     <tr><td>ID: ${teamMemberQuestions.teamMemberID}</td></tr>`;
      
                     fs.appendFile("output/index.html", engineerRow, function(err) {
                      if (err) {
                        throw err;
                      }
                    });

                     
      inquirer
      .prompt(gitAskAgain)
      .then(gitAskAgain => {
        if(gitAskAgain.addAnotherTeamMember == "Yes"){
          console.log("//");
/* HTML Code #4: GitHub table row for a team member other than the last team member to be entered  */
        var GitHubNotLast = 

        `<tr><td>GitHub account: <a href="https://www.github.com/${gitAskAgain.GitHub}">${gitAskAgain.GitHub}</a></td></tr>
        </table>
        </div>
        </div>
        </div>`;

        fs.appendFile("output/index.html", GitHubNotLast, function(err) {
          if (err) {
            throw err;
          }
        });

          askTeamMemberQuestions2();
        }
        else if (gitAskAgain.addAnotherTeamMember == "No"){
          console.log("000");

          /* HTML Code #5: GitHub table row + end of document for last team member entered who is also an engineer. */

          var GitHubPlusEnd = 

          
            `<tr><td>GitHub account: <a href="https://www.github.com/${gitAskAgain.GitHub}">${gitAskAgain.GitHub}</a></td></tr>
            </table>
            </div>
            </div>
            </div>
        </body>
    </html>`;

    fs.appendFile("output/index.html", GitHubPlusEnd, function(err) {
      if (err) {
        throw err;
      }
    });

        }
        })
      }
      
    else if (teamMemberQuestions.role == "Intern") {
      console.log(teamMemberQuestions.role);
      /* HTML Code #6: Intern info up to but not including the current school */

var InternRow =
`<br>
        <div class="row">
            <div class="col-md-3">
         <div class="row" id="top">
             <br>
             <p id="name">${teamMemberQuestions.teamMemberName}</p>
             <p id="role">Intern</p>
             <br>
         </div>
        <div class="row" id="bottom">
            <table id="infotable">
                <tr><td>ID: ${teamMemberQuestions.teamMemberID}</td></tr>`

        fs.appendFile("output/index.html", InternRow, function(err) {
          if (err) {
            throw err;
          }
        });

              

      inquirer
      .prompt(schoolAskAgain)
      .then(schoolAskAgain => {
        if (schoolAskAgain.addAnotherTeamMember == "Yes"){
          console.log("//");
      /* HTML Code #7: Current school info for interns other than the last team member */

var currentSchoolNotLast = 

`<tr><td>Current School: ${schoolAskAgain.currentSchool}</td></tr>
</table>
</div>
</div>
</div>`

fs.appendFile("output/index.html", InternRow, function(err) {
  if (err) {
    throw err;
  }
});

          askTeamMemberQuestions2();
        }
        else if (schoolAskAgain.addAnotherTeamMember == "No"){
          console.log("000");
          /* HTML Code #8: Current school info for interns + end of code for last team member */
var currentSchoolLast =

`<tr><td>Current School: George Washington University</td></tr>
</table>
</div>
</div>
</div>
</body>
</html>`


        }
      })
    }
  })
}

function askTeamMemberQuestions2(){
  inquirer
  .prompt(teamMemberQuestions)
  .then(teamMemberQuestions => {
    console.log(teamMemberQuestions.role)
    if (teamMemberQuestions.role == "Engineer"){
/* HTML Code #9: Engineer info in HTML (minus the GitHub account)  */

      var engineerRow2 = 

`<br>
<div class="row">
           <div class="col-md-3">
        <div class="row" id="top">
            <br>
            <p id="name">${teamMemberRoleQuestions.teamMemberName}</p>
            <p id="role">Engineer</p>
            <br>
        </div>
       <div class="row" id="bottom">
           <table id="infotable">
               <tr><td>ID: ${teamMemberQuestions.teamMemberID}</td></tr>`;

               fs.appendFile("index.html", engineerRow2, function(err) {
                if (err) {
                  throw err;
                }
              
              })
          

      inquirer
      .prompt(gitAskAgain)
      .then(gitAskAgain => {
        if(gitAskAgain.addAnotherTeamMember == "Yes"){
          console.log("//");
          /* HTML Code #10: GitHub table row for a team member other than the last team member to be entered  */

          var GitHubNotLast2 = 
          `<tr><td>GitHub account: <a href="https://www.github.com/JohnDoeGitsIt">JohnDoeGitsIt</a></td></tr>
          </table>
      </div>
      </div>
      </div>`

      fs.appendFile("index.html", GitHubNotLast2, function(err) {
        if (err) {
          throw err;
        }
      
      })



          askTeamMemberQuestions();
        }
        else if (gitAskAgain.addAnotherTeamMember == "No"){

          console.log("000");
          /* HTML Code #11: GitHub table row + end of document for last team member entered who is also an engineer. */

        }
        })
      }
    else if (teamMemberQuestions.role == "Intern") {
      console.log(teamMemberQuestions.role);
            /* HTML Code #12: Intern info up to but not including the current school */

      inquirer
      .prompt(schoolAskAgain)
      .then(schoolAskAgain => {
        if (schoolAskAgain.addAnotherTeamMember == "Yes"){
          console.log("//");
            /* HTML Code #13: Current school info for interns other than the last team member */

          askTeamMemberQuestions();
        }
        else if (schoolAskAgain.addAnotherTeamMember == "No"){
            /* HTML Code #14: Current school info for interns + end of code for last team member */

          console.log("000");
        }
      })
    }
  })

}


/*
function askTeamMemberQuestions(){
  inquirer
  .prompt(teamMemberQuestions)
  .then(teamMemberQuestions => {
    if (teamMemberQuestions.role = roleChoices[0]){
      inquirer
      .prompt(GitHubQuestion, askAgain)
      .then(askTeamMemberQuestions())
    }
    else { 
    inquirer
    .prompt(currentSchoolQuestion, askAgain)
    .then(askTeamMemberQuestions())
    }
  })
}

*/
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
  type: "list",
  message: "Would you like to add a team member?",
  name: "addTeamMember",
  choices: ["Yes", "No"]
}

])

.then(ManagerQuestions => {

  /* HTML Code 1: This is the manager profile (used only if the user inputs a manager profile. */

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

/* HTML Code 2: This is the row for the manager's data, to be used if the user chooses to add engineers and/or interns
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

if (ManagerQuestions.addTeamMember == "Yes"){
  inquirer
  .prompt(teamMemberQuestions)
  .then(teamMemberQuestions => {
    console.log(teamMemberQuestions.role)
    if (teamMemberQuestions.role == "Engineer"){
      inquirer
      .prompt(gitAskAgain)
      .then(gitAskAgain => {
        if(gitAskAgain.addAnotherTeamMember == "Yes"){
          console.log("//");
          askTeamMemberQuestions();
        }
        else if (gitAskAgain.addAnotherTeamMember == "No"){
          console.log("000");
        }
        })
      }
    else if (teamMemberQuestions.role == "Intern") {
      console.log(teamMemberQuestions.role);
      inquirer
      .prompt(schoolAskAgain)
      .then(schoolAskAgain => {
        if (schoolAskAgain.addAnotherTeamMember == "Yes"){
          console.log("//");
          askTeamMemberQuestions();
        }
        else if (schoolAskAgain.addAnotherTeamMember == "No"){
          console.log("000");
        }
      })
    }
  }
  )
}

else{
  fs.writeFile("output/index.html", managerProfile, function(err) {
    if (err) {
      throw err;
    }
  });
  console.log("Profile of manager is ready to view.");
}


/*

  if (ManagerQuestions.teamMembers > 0){
 //   teamMemberQuestions = [];
    console.log("STARTS HERE");
    console.timeLog(JSON.stringify(ManagerQuestions.teamMembers));
    console.log(ManagerQuestions);

    .forEach(patron => console.log(patron.age));

    /*
    for (i = 1; i < (ManagerQuestions.teamMembers + 1); i++){
        teamMemberQuestions.push(
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
*/
/* This question asks how many interns the user would like to provide, and is only asked once. */
/*
    engineerQuestions.push(
      {
        type: "number",
        message: "How many interns would you like to add?",
        name: "interns"
      });
      */
/*
      const engineerNum = ((engineerQuestions.length - 1) / 3);
*/
/*
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
/*
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

/*
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
}*/
});