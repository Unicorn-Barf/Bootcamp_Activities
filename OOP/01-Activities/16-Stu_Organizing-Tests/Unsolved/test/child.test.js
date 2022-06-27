const Child = require("../child");

describe("Child", () => {
  // TODO: Add a comment describing the purpose of the following test suite
  // Checking initilization of a new child object
  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const child = new Child("Sarah", 3);

      // TODO: Add a comment describing the purpose of the following statements
      // This is making sure that the new instance has a name and age keys with the input values
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      // TODO: Add a comment describing the purpose of the following expression
      // create a cb funct to create a new child object with no parameters
      const cb = () => new Child();

      // TODO: Add a comment describing the purpose of the following statement
      // expects a new child instance with no parameters to throw an error
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      const cb = () => new Child("Sarah");

      // TODO: Add a comment describing the purpose of the following declaration
      // creates a new err value to compare in the expect statement
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      // TODO: Add a comment describing the purpose of the following statement
      // expects the callback with no child age to throw and error 'err'
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child("Sarah", "2");
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });
  });
});
