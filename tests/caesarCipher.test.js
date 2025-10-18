const caesarCipher = require("../src/caesarCipher");

describe("caesarCipher", () => {
  it("should take a string and shift factor and return it with each character shifted", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("preserve case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it("preserve special characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
