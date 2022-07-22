const { describe } = require("yargs");
const Employee = require("../lib/employee");

describe("Should provide employee info", () => {
  it("creates name,id, email", () => {
    const employee = new Employee("Chris", "1", "csmith@gmail.com");
    expect(employee.name).toEqual("string");
    expect(employee.id).toEqual("string");
    expect(employee.email).toEqual("string");
  });
  it("New Name", () => {
    const employee = new Employee("Chris", "1", "csmith@gmail.com");
    const { name } = employee;
    expect(employee.getName()).toBe(name);
  });
  it("New ID", () => {
    const employee = new Employee("Chris", "1", "csmith@gmail.com");
    const { id } = employee;
    expect(employee.getId()).toBe(id);
  });
  it("New Email", () => {
    const employee = new Employee("Chris", "1", "csmith@gmail.com");
    const { email } = employee;
    expect(employee.getEmail()).toBe(email);
  });
  it("New Role", () => {
    const employee = new Employee("Chris", "1", "csmith@gmail.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
