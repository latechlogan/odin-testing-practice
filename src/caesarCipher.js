function caesarCipher(string, shift) {
  let charCodes = [];

  for (let i = 0; i < string.length; i++) {
    charCodes.push(string.charCodeAt(i));
  }

  let result = charCodes.map((charCode) => {
    //uppercase codes
    if (charCode > 64 && charCode < 91) {
      let shifted = charCode + shift;
      if (shifted > 90) {
        shifted -= 26;
      }
      return String.fromCharCode(shifted);
    }
    //lowercase codes
    if (charCode > 96 && charCode < 123) {
      let shifted = charCode + shift;
      if (shifted > 122) {
        shifted -= 26;
      }
      return String.fromCharCode(shifted);
    }
    return String.fromCharCode(charCode);
  });

  return result.join("");
}

module.exports = caesarCipher;
