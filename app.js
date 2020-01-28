const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");
const yesNo = ["Yes", "No"];
const roleChoices = ["Engineer", "Intern"];
const teamMemberNamePrompt = {
  type: "input",
  message: "Team member name:",
  name: "name",
};
const teamMemberRolePrompt = {
  type: "list",
  message: "Team member role:",
  name: "role",
  choices: ["Engineer", "Intern"]
};
const teamMemberEmailPrompt = {
  type: "input",
  message: "Team member email:",
  name: "email",
};
const GitHubPrompt = {
  type: "input",
  message: "GitHub account:",
  name: "GitHub"
};
const currentSchoolPrompt = {
  type: "input",
  message: "Current school:",
  name: "currentSchool"
};

function teamMemberPrompt(){
  inquirer.prompt([teamMemberNamePrompt, teamMemberRolePrompt, teamMemberEmailPrompt])
         .then(answers =>{
           if(answers.role === roleChoices[0]){
             inquirer.prompt([GitHubPrompt]);
           }
           else if(answers.role === yesNo[1]){
             inquirer.prompt([currentSchoolPrompt])
           }
          });
};

inquirer.prompt([{
  type: "input",
  message: "Manager name:",
  name: "name"
},
{
  type: "input",
  message: "Manager email:",
  name: "email"
},
{
  type: "input",
  message: "Manager office number:",
  name: "officeNumber"
},
{
  type: "list",
  message: "Would you like to add team members?",
  name: "teamMembers",
  choices: ["Yes", "No"] 
}
])

.then(answers => {
if (answers.teamMembers === yesNo[0]){
  inquirer.prompt([teamMemberNamePrompt,
    {
      type: "list",
      message: "Team member role:",
      name: "role",
      choices: ["Engineer", "Intern"]
    }, teamMemberEmailPrompt
  ])
  .then(answers => {
    // let EmployeeToWrite = "";
       if(answers.role === roleChoices[0]){
           inquirer.prompt([{
            type: "input",
            message: "GitHub account:",
            name: "GitHub"
          },
          {
            type: "list",
      message: "Would you like to add more team members?",
      name: "moreTeamMembers",
      choices: ["Yes", "No"]
      }]);
       }
       else if(answers.role === roleChoices[1]){
         inquirer.prompt([{
          type: "input",
          message: "Current school:",
          name: "currentSchool"
        },
        {
          type: "list",
    message: "Would you like to add more team members?",
    name: "moreTeamMembers",
    choices: ["Yes", "No"]
    }]);
    if(answers.moreTeamMembers === yesNo[0]){
      teamMemberPrompt();
       }
     else{
       console.log("Team profile ready to view.");
    }
       }
});
}

else if (answers.teamMembers === yesNo[1]){
  console.log("Manager profile ready to view.");
}
});