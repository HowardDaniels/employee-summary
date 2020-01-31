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

fs.appendFile("output/index.html", currentSchoolNotLast, function(err) {
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

fs.appendFile("output/index.html", currentSchoolLast, function(err) {
  if (err) {
    throw err;
  }
});


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

          var GitHubPlusEnd2 = 

          
          `<tr><td>GitHub account: <a href="https://www.github.com/${gitAskAgain.GitHub}">${gitAskAgain.GitHub}</a></td></tr>
          </table>
          </div>
          </div>
          </div>
      </body>
  </html>`;

  fs.appendFile("output/index.html", GitHubPlusEnd2, function(err) {
    if (err) {
      throw err;
    }
  });
        }
        })
      }
    else if (teamMemberQuestions.role == "Intern") {
      console.log(teamMemberQuestions.role);
            /* HTML Code #12: Intern info up to but not including the current school */

            var InternRow2 =
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
            
                    fs.appendFile("output/index.html", InternRow2, function(err) {
                      if (err) {
                        throw err;
                      }
                    });

      inquirer
      .prompt(schoolAskAgain)
      .then(schoolAskAgain => {
        if (schoolAskAgain.addAnotherTeamMember == "Yes"){
          console.log("//");
            /* HTML Code #13: Current school info for interns other than the last team member */

            var currentSchoolNotLast2 = 

            `<tr><td>Current School: ${schoolAskAgain.currentSchool}</td></tr>
            </table>
            </div>
            </div>
            </div>`
            
            fs.appendFile("output/index.html", currentSchoolNotLast2, function(err) {
              if (err) {
                throw err;
              }
            });


          askTeamMemberQuestions();
        }
        else if (schoolAskAgain.addAnotherTeamMember == "No"){
            /* HTML Code #14: Current school info for interns + end of code for last team member */

            var currentSchoolLast2 =

            `<tr><td>Current School: George Washington University</td></tr>
            </table>
            </div>
            </div>
            </div>
            </body>
            </html>`
            
            fs.appendFile("output/index.html", currentSchoolLast2, function(err) {
              if (err) {
                throw err;
              }
            });

          console.log("000");
        }
      })
    }
  })

}

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
});