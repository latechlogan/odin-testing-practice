const capitalize = require("../src/capitalize");

describe("Capitalize", () => {
  it("capitalizes first character of a string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  it("capitalizes first character of a string", () => {
    expect(capitalize("mY NAME")).toBe("MY NAME");
  });

  it("capitalizes first character of a string", () => {
    expect(capitalize("l")).toBe("L");
  });
});
