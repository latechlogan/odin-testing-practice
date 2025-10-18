const analyzeArray = require("../src/analyzeArray");

describe("analyzeArray", () => {
  it("calculates the average", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  });

  it("finds the minimum value", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  });

  it("finds the maximum value", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  });

  it("returns the array length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
});
