const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, "Engineer");
    this.github = github;
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

    getGithub(){}
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
  getRole() // Overridden to return 'Engineer'
  getGithub();
