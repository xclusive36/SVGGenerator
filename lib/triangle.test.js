const Triangle = require("./triangle"); // import the Triangle class

describe("Triangle", () => {
  // Test that checks if the Triangle class returns the correct result.
  describe("render()", () => {
    // A test is created to check that render() returns the correct string.
    it("should return a string", () => {
      const shape = new Triangle({
        text: "ABC",
        textColor: "#000000",
        shape: "triangle",
        shapeColor: "#FFFFFF",
      }); // create a new instance of the Triangle class
      shape.setColor("blue"); // set the color of the shape
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); // check that the render() method returns the correct string
    });
  });
});