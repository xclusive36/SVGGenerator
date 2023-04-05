const Shape = require("./shape");

describe("Shape", () => {
  // Test that checks if the Shape class functions properly.
  describe("generateShape()", () => {
    // A test is created to check that generateShape() returns a string.
    it("should return a string", () => {
      const result =
        '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
      const shape = new Shape({
        text: "ABC",
        textColor: "#000000",
        shape: "circle",
        shapeColor: "#FFFFFF",
      });
      expect(shape.generateShape()).toContain(result);
    });
  });
});
