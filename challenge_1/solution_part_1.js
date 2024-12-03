const getInput = require("./input");

function santaLocationDistance() {
  let { left, right } = getInput();
  let distance = 0;
  const l = left.length;

  if (left.length !== right.length) return "arrays are not a pair";
  for (let i = 0; i < l; i++) {
    let min = 0;
    const lMin = Math.min(...left);

    const rMin = Math.min(...right);
    min = lMin - rMin;
    if (min < 0) min = ~min + 1;
    distance += min;

    // remove the small element
    const lI = left.indexOf(lMin);
    const rI = right.indexOf(rMin);
    if (lI > -1) {
      left.splice(lI, 1);
    }

    if (rI > -1) {
      right.splice(rI, 1);
    }
  }
  return distance;
}

console.log(santaLocationDistance());
