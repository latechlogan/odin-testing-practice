const reverseString = require("../src/reverseString");

describe("reverseString", () => {
  it("takes a string and returns it reversed", () => {
    expect(reverseString("xyz")).toBe("zyx");
  });

  it("takes a string and returns it reversed", () => {
    expect(reverseString("Hello world!")).toBe("!dlrow olleH");
  });

  it("takes a string and returns it reversed", () => {
    expect(reverseString("a")).toBe("a");
  });
});
