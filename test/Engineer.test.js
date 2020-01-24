const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, "Engineer");
    this.github = github;
  }
/*
  useHorn() {
    console.log(this.sound);
  }

  checkPassengerLength() {
    if (this.passengers.length > 4) {
      console.log("Cars only seat 4 people. You have too many passengers!");
    } else {
      console.log(`You have room for ${4 - this.passengers.length} people.`);
    }
  }
}

const carPassengers = [
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


  /*getName()
  * getId()
  * getEmail()
  */ getRole() // Overridden to return 'Engineer'
  getGithub();
