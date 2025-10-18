function analyzeArray(array) {
  let average =
    array.reduce((accumulator, current) => accumulator + current, 0) /
    array.length;

  let min = Math.min(...array);

  let max = Math.max(...array);

  let length = array.length;

  return { average, min, max, length };
}

module.exports = analyzeArray;
