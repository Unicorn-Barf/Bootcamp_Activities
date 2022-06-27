const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following statement
      // Checking the initialization of a new DayCare instance
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      // TODO: Add a comment describing the purpose of the following declarations
      // creating new instances of a Child and DayCare object
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following method
      // using .addChile with the new Child object to simulate adding child
      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statements
      // Expecting a new child object to be store in dayCare.children
      expect(dayCare.children.length).toEqual(1);
      // Expecting that object to be the child constant
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // Expecting that Tammy is too old and shouldn't be added to the dayCare object using .addChild(child)
      expect(dayCare.children.length).toEqual(0);
    });

    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);

      // TODO: Add a comment describing the purpose of the following expression
      // Creating an array of new child object instances inside dayCare object under .children
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // expects that 3 are the max ammount of children per daycare and .addChild() won't allow more that 3
      expect(dayCare.children.length).toEqual(3);
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      // TODO: Add a comment describing the purpose of the following declaration
      // Storing expected new Error in a const
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );

      // TODO: Add a comment describing the purpose of the following expression
      // cb fn to create new DayCare instance and use .addChild() with no parameter
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      // TODO: Add a comment describing the purpose of the following statement
      // Expecting cb func to throw new error equal to err
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      // storing the .pickupChild() name data
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);

      // TODO: Add a comment describing the purpose of the following statement
      // Expects that the child was removed
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      const removed = dayCare.pickupChild("Fred");

      // TODO: Add a comment describing the purpose of the following statement
      expect(typeof removed).toEqual("undefined");

      // TODO: Add a comment describing the purpose of the following statement
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
