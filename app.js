const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./test/Employee.test");
const yesNo = ["Yes", "No"];
const roleChoices = ["Engineer", "Intern"];

/*
const teamMemberPrompt = function teamMemberPrompt(i){
  inquirer.prompt([{
    type: "input",
    message: "Team member #" + i  + " name:",
    name: "name" + i,
  },
  {
    type: "list",
    message: "Team member #" + i + " role:",
    name: "role" + i,
    choices: ["Engineer", "Intern"]
  }, 
  {
    type: "input",
    message: "Team member #" + i + " email:",
    name: "email" + i,
}])
         .then(answers =>{
           if(answers.role === roleChoices[0]){
             inquirer.prompt([
               { type: "input",
             message: "Team member #" + i + "'s GitHub account:",
             name: "GitHub" + i
             }]);
            }

           else if(answers.role === roleChoices[1]){
             inquirer.prompt([ 
               {type: "input",
             message: "Team member #" + i + "'s current school:",
             name: "currentSchool" + i
            }]);
          }
        });
      }

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
  type: "number",
  message: "How many team members would you like to add?",
  name: "teamMembers"
}
])

.then(answers => {

if (answers.teamMembers >= 0){
arr = [];
var prompts = "";
for (i = 1; i < (answers.teamMembers + 1); i++){
 arr.push(i);
 console.log(arr);
prompts += "r";
console.log(prompts);
}
}

else if (answers.teamMembers === 0){
  console.log("Manager profile ready to view.");
}
});
/*

inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([{
    type: 'recursive',
    message: 'Add a new user ?',
    name: 'users',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What is user\'s name?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }, {
            type: 'input',
            name: 'age',
            message: 'How old is he?',
            validate: function (value) {
                var digitsOnly = /\d+/;
                if (digitsOnly.test(value)) { return true; }
                return 'Invalid age! Must be a number genius!';
            }
        }
    ]
}]).then(function(answers) {
    console.log(answers.users);
    OUTPUT :
    [
        {
            name: 'Brendan Eich',
            age: '42',
        }, {
            name: 'Jordan Walke',
            age: '13',
        },
    ]
    
}); */