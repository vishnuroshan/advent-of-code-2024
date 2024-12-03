const getInput = require("./input");

function santaLocationSimilarity() {
  let { left, right } = getInput();
  let similarity = 0;
  const l = right.length;
  const rCounts = right.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  if (left.length !== right.length) return "arrays are not a pair";
  for (let i = 0; i < l; i++) {
    const num = left[i];
    let res = 0;
    if (num && rCounts[num]) {
      res = num * rCounts[num];
    }
    similarity += res;
  }
  return similarity;
}

console.log(santaLocationSimilarity());
