const Employee = require("./Employee.test");

class Intern extends Employee {
  constructor(school) {
    super(name, id, "Intern");
    this.school = school;
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
