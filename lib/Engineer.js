const Employee = require("./Employee.test");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, "Engineer");
    this.github = github;
  }

  getName(answers) {
    console.log(`The employee's name is ${answers.name}.`)
   }
    getID(answers) {
      console.log(`The employee's ID is ${answers.id}.`)
    }
   getRole(answers) {
      
        console.log(`The employee's role is ${answers.role}.`)
   }

    getGithub(answers){
      console.log(`The employee's GitHub is ${answers.GitHub}.`)
    }
  }

/* const carPassengers = [
  {
    name: "Aristotle"
  },
  {
    name: "Confucius"
  },
  {
    name: "Socrates"
  },
  {
    name: "Lao-Tzu"
  },
  {
    name: "Plato"
  }
];

const car = new Car(15, "blue", carPassengers);

console.log("---CAR---"); */


  Engineer.getName()
  Engineer.getID()
  Engineer.getRole() // Overridden to return 'Engineer'
  Engineer.getGithub();