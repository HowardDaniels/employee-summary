const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");
const yesNo = ["Yes", "No"];
const roleChoices = ["Engineer", "Intern"];



function teamMemberPrompt(){
  inquirer.prompt([{
    type: "input",
    message: "Team member name:",
    name: "name",
  },
  {
    type: "list",
    message: "Team member role:",
    name: "role",
    choices: ["Engineer", "Intern"]
  }, 
  {
    type: "input",
    message: "Team member email:",
    name: "email",
}])
         .then(answers =>{
           if(answers.role === roleChoices[0]){
             inquirer.prompt([
               { type: "input",
             message: "GitHub account:",
             name: "GitHub"
             }]);
            }

           else if(answers.role === roleChoices[1]){
             inquirer.prompt([ 
               {type: "input",
             message: "Current school:",
             name: "currentSchool"
            }]);
          }
        });
      }
/*
function morePrompt(){
  inquirer.prompt([{
   type: "list",
   message: "Would you like to add more team members?",
   name: "moreTeamMembers",
   choices: ["Yes", "No"] 
 }])
 .then(answers => {
   if (answers.moreteamMembers === yesNo[0]){
     teamMemberPrompt();
   }

   else {
     console.log("Your profile is ready.");
   }
 })
 };
*/
      
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
 inquirer.prompt([{
   type: "number",
   message: "Number of (non-managing) team members:",
   name: "numberOfTeamMembers"
 }])
 
 .then(answers => {
   var arr = [];
for (i = 1; i < (answers.numberOfTeamMembers + 1); i++){
 arr.push(i);
 console.log(arr);
}

//arr.forEach(teamMemberPrompt()
 // );
 });
}

else if (answers.teamMembers === yesNo[1]){
  console.log("Manager profile ready to view.");
}
});

