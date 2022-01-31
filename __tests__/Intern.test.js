const Intern = require("../intern.js");


describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an object with string properties'name', 'id', 'email', and 'school'", () => {
        const intern = new Intern("Bill Gates", "1", "Bill Gates@junkmail.com", "FSU");
  
   
        expect(intern).toEqual({ name: "Bill Gates", id: "1", email: "Bill Gates@junkmail.com", school: "FSU" });
      });
    });
  
    describe("getName", () => {
      it("should be the intern's name as a string", () => {
  
        const intern = new Intern("Bill Gates", "1", "Bill Gates@junkmail.com", "FSU");
    
  
        expect(intern.getName()).toEqual("Bill Gates");
      });
  
      it("should have the intern's id as '2'", () => {
        const intern = new Intern("Phil", "2", "Phil@junkmail.com", "FSU");
  
   
        expect(intern.getId()).toEqual("2");
      });
  
      it("should have the intern's email as 'Tim@junkmail.com'", () => {
        const intern = new Intern("Tim", "3", "Tim@junkmail.com", "FSU");

        expect(intern.getEmail()).toEqual("Tim@junkmail.com");
      });

      it("should have the intern's role as 'Intern'", () => {
        const intern = new Intern("Rob", "4", "Rob@junkmail.com", "FSU");

        expect(intern.getRole()).toEqual("Intern");
      });
    });
});