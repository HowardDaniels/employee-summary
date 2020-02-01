class Employee {
    constructor(name, id, title){
      this.name= name;
      this.id = id;
      this.title = title;
    }
    
   getName(answers) {
    console.log(`The employee's name is ${answers.name}.`)
   }
    getEmail(answers) {
      console.log(`The employee's email address is ${answers.email}.`)
    }
   getRole(answers) {
        //  return 'I have a ' + this.carname;
        console.log(`The employee's role is ${answers.role}.`)
   } 
  }

  module.exports = Employee;