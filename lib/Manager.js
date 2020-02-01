const Employee = require("./Employee.test");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, "Manager");
    this.officeNumber = officeNumber;
  }

  getName(answers) {
    console.log(`The employee's name is ${answers.name}.`)
   }
    getID(answers) {
      console.log(`The employee's ID is ${answers.id}.`)
    }
   getRole(answers) {
        //  return 'I have a ' + this.carname;
        console.log(`The employee's role is ${answers.role}.`)
   }
   getofficeNumber(answers){
     console.log(`The employee's office number is ${answers.officeNumber}.`);
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
  getRole() // Overridden to return 'Manager'
  getofficeNumber()