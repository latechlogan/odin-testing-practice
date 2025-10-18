const Calculator = require("../src/Calculator");

describe("Calculator functionality", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("Add", () => {
    it("should take two numbers and return the sum", () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    it("should take two numbers and return the sum", () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    it("should take two numbers and return the sum", () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    it("should take two numbers and return the sum", () => {
      expect(calculator.add(-5, 3)).toBe(-2);
    });

    it("should take two numbers and return the sum", () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    it("should take two numbers and return the sum", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("Subtract", () => {
    it("should take two numbers and return the difference", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it("should take two numbers and return the difference", () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    it("should take two numbers and return the difference", () => {
      expect(calculator.subtract(-5, 3)).toBe(-8);
    });

    it("should take two numbers and return the difference", () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    it("should take two numbers and return the difference", () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    it("should take two numbers and return the difference", () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe("Multiply", () => {
    it("should take two numbers and return the product", () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });

    it("should take two numbers and return the product", () => {
      expect(calculator.multiply(-4, -3)).toBe(12);
    });

    it("should take two numbers and return the product", () => {
      expect(calculator.multiply(4, -3)).toBe(-12);
    });

    it("should take two numbers and return the product", () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    it("should take two numbers and return the product", () => {
      expect(calculator.multiply(5, 1)).toBe(5);
    });

    it("should take two numbers and return the product", () => {
      expect(calculator.multiply(0.2, 0.5)).toBe(0.1);
    });
  });

  describe("Divide", () => {
    it("should take two numbers and return the quotient", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it("should take two numbers and return the quotient", () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });

    it("should take two numbers and return the quotient", () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    it("should take two numbers and return the quotient", () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    it("should take two numbers and return the quotient", () => {
      expect(calculator.divide(5, 1)).toBe(5);
    });

    it("should take two numbers and return the quotient", () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    it("should take two numbers and return the quotient", () => {
      expect(calculator.divide(5, 0)).toBe(Infinity);
    });
  });
});
