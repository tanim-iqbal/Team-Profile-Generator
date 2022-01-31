const Employee = require("../employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with 'name' string property, 'id' string property, and 'email' string property", () => {
        const employee = new Employee("Bill Gates", "1", "Bill Gates@junkmail.com");
 
        expect(employee).toEqual({ name: "Bill Gates", id: "1", email: "Bill Gates@junkmail.com" });
      });
    });
  
    describe("getName", () => {
      it("should be the employee's name as a string", () => {
       
        const employee = new Employee("Bill Gates", "1", "Bill Gates@junkmail.com");
    
       
        expect(employee.getName()).toEqual("Bill Gates");
      });
  
      it("should have the employee's id as '2'", () => {
        const employee = new Employee("Phil Spencer", "2", "Phil Spencer@junkmail.com");
  
    
        expect(employee.getId()).toEqual("2");
      });
  
      it("should have the employee's email as 'Steve Jobs@junkmail.com'", () => {
        const employee = new Employee("Steve Jobs", "3", "Steve Jobs@junkmail.com");

       
        expect(employee.getEmail()).toEqual("Steve Jobs@junkmail.com");
      });

      it("should have the employee's role as 'Employee'", () => {
        const employee = new Employee("Tim Cook", "4", "Tim Cook@junkmail.com");
  
   
        expect(employee.getRole()).toEqual("Employee");
      });
    });
});