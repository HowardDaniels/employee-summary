const Employee = require("./Employee.test");

class Intern extends Employee {
  constructor(school) {
    super(name, id, "Intern");
    this.school = school;
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

    getSchool(answers){
console.log(`The employee's current school is ${answers.school}`)
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


  getName()
  getID()
  getRole() // Overridden to return 'Intern'
  getSchool();
