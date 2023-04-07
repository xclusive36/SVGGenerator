const Square = require("./square"); // import the Square class

describe("Square", () => {
  // Test that checks if the Square class returns the correct result.
  describe("render()", () => {
    // A test is created to check that render() returns the correct string.
    it("should return a string", () => {
      const shape = new Square({
        text: "ABC",
        textColor: "#000000",
        shape: "square",
        shapeColor: "#FFFFFF",
      }); // create a new instance of the Square class
      shape.setColor("blue"); // set the color of the shape
      expect(shape.render()).toEqual('<rect width="150" height="150" x="75" y="25" fill="blue" />'); // check that the render() method returns the correct string
    });
  });
});