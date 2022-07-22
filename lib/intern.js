const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, email, school) {
    super(name, email);
    this.school = school;
  }
  getRole() {
    return "INTERN";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
