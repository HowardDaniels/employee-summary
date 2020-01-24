class Employee {
    constructor(name, id, title){
      this.name= name;
      this.id = id;
      this.title = title;
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
  }

  module.exports = Employee;