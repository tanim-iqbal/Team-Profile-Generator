const Engineer = require("../engineer.js");
describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with string properties 'name', 'id', 'email', and 'school'", () => {
        const engineer = new Engineer("billgates", "1", "billgates@junkmail.com", "billgates.github.com");
  
        expect(engineer).toEqual({ name: "billgates", id: "1", email: "billgates@junkmail.com", github: "billgates.github.com" });
      });
    });
  
    describe("getName", () => {
      it("should be the engineer's name as a string", () => {
   
        const engineer = new Engineer("billgates", "1", "billgates@junkmail.com", "billgates.github.com");
  
        expect(engineer.getName()).toEqual("billgates");
      });
  
      it("should have the engineer's id as '2'", () => {
        const engineer = new Engineer("Joe", "2", "Joe@junkmail.com", "billgates.github.com");
  
        
        expect(engineer.getId()).toEqual("2");
      });
  
      it("should have the engineer's email as 'Jon@junkmail.com'", () => {
        const engineer = new Engineer("Jon", "3", "Jon@junkmail.com", "billgates.github.com");
  
    
        expect(engineer.getEmail()).toEqual("Jon@junkmail.com");
      });

      it("should have the engineer's role as 'engineer'", () => {
        const engineer = new Engineer("Rob", "4", "Rob@junkmail.com", "billgates.github.com");
  

        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
});