const Circle = require("./circle");

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
      });
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });
});