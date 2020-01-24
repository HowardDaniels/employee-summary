const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, "Manager");
    this.officeNumber = officeNumber;
  }

  getName() {
    //  return 'I have a ' + this.carname;
    }
    getEmail() {
      //  return 'I have a ' + this.carname;
    }
    getRole() {
        //  return 'I have a ' + this.carname;
        console.log(this.class);
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
  getId()
  getEmail()
  getRole() // Overridden to return 'Manager'
