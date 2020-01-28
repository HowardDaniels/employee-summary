const Employee = require("./Employee.test");

class Intern extends Employee {
  constructor(school) {
    super(name, id, "Intern");
    this.school = school;
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

    getSchool(){}
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
  getId()
  getEmail()
  getRole() // Overridden to return 'Intern'
  getSchool();
