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

describe("Square", () => {
  // Test that checks if the Square returns the correct result.
  describe("square()", () => {
    // A test is created to check that square() returns the correct string.
    it("should return a string", () => {
      const result = `<rect width="150" height="150" x="75" y="25" fill="#FFFFFF" />`;
      const shape = new Shape({
        text: "ABC",
        textColor: "#000000",
        shape: "square",
        shapeColor: "#FFFFFF",
      });
      expect(shape.square()).toEqual(result);
    });
  });
});

describe("Circle", () => {
  // Test that checks if the Circle returns the correct result.
  describe("circle()", () => {
    // A test is created to check that circle() returns the correct string.
    it("should return a string", () => {
      const result = `<circle cx="150" cy="100" r="80" fill="#FFFFFF" />`;
      const shape = new Shape({
        text: "ABC",
        textColor: "#000000",
        shape: "circle",
        shapeColor: "#FFFFFF",
      });
      expect(shape.circle()).toEqual(result);
    });
  });
});

describe("Triangle", () => {
  // Test that checks if the Triangle returns the correct result.
  describe("triangle()", () => {
    // A test is created to check that triangle() returns the correct string.
    it("should return a string", () => {
      const result = `<polygon points="150, 18 244, 182 56, 182" fill="#FFFFFF" />`;
      const shape = new Shape({
        text: "ABC",
        textColor: "#000000",
        shape: "triangle",
        shapeColor: "#FFFFFF",
      });
      expect(shape.triangle()).toEqual(result);
    });
  });
});