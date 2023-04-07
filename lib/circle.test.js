const Circle = require("./circle"); // import the Circle class

describe("Circle", () => {
  // Test that checks if the Circle class returns the correct result.
  describe("render()", () => {
    // A test is created to check that render() returns the correct string.
    it("should return a string", () => {
      const shape = new Circle({
        text: "ABC",
        textColor: "#000000",
        shape: "circle",
        shapeColor: "#FFFFFF",
      }); // create a new instance of the Circle class
      shape.setColor("blue"); // set the color of the shape
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />'); // check that the render() method returns the correct string
    });
  });
});