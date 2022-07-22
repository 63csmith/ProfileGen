const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, email, gitHub) {
    super(name, email);
    this.gitHub = gitHub;
  }
  getRole() {
    return "ENGINEER";
  }
  getGithub() {
    return this.gitHub;
  }
}

module.exports = Engineer;
