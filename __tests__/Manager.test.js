const Manager = require("../manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an object with string properties 'name', 'id', 'email', and 'officeNumber'", () => {
        const manager = new Manager("Bill Gates", "1", "Bill Gates@junkmail.com", "123-456-7890");
  
        expect(manager).toEqual({ name: "Bill Gates", id: "1", email: "Bill Gates@junkmail.com", officeNumber: "123-456-7890" });
      });
    });
  
    describe("getName", () => {
      it("should be the manager's name as a string", () => {

        const manager = new Manager("Bill Gates", "1", "Bill Gates@junkmail.com", "123-456-7890");
    
        expect(manager.getName()).toEqual("Bill Gates");
      });
  
      it("should have the manager's id as '2'", () => {
        const manager = new Manager("Phil Spencer", "2", "Phil Spencer@junkmail.com", "123-456-7890");
  
        expect(manager.getId()).toEqual("2");
      });
  
      it("should have the manager's email as 'Tim Cook@junkmail.com'", () => {
        const manager = new Manager("Tim Cook", "3", "Tim Cook@junkmail.com", "123-456-7890");
  
        expect(manager.getEmail()).toEqual("Tim Cook@junkmail.com");
      });

      it("should have the manager's role as 'Manager'", () => {
        const manager = new Manager("Elon", "4", "Elon@junkmail.com", "123-456-7890");
  
        expect(manager.getRole()).toEqual("Manager");
      });
    });
});