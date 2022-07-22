const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, email, office) {
    super(name, email);
    this.office = office;
  }
  getRole() {
    return "INTERN";
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;
