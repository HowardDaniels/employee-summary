const Employee = require("./Employee.test");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, "Engineer");
    this.github = github;
  }

  getName() {
    console.log(`The employee's name is ${this.name}.`)
   }
    getEmail() {
      console.log(`The employee's email address is ${this.email}.`)
    }
   getRole() {
        //  return 'I have a ' + this.carname;
        console.log(`The employee's role is ${this.role}.`)
   }

    getGithub(){
      console.log(`The employee's GitHub is ${this.GitHub}.`)
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
  Engineer.getId()
  Engineer.getEmail()
  Engineer.getRole() // Overridden to return 'Engineer'
  Engineer.getGithub();