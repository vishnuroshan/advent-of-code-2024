// import { c1 } from "./input";
const c1 = require("./input");

const challenge1 = () => {
  const arr = c1.replace(/\n/g, ",").split(",");
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    left.push(parseInt(arr[i]));
    right.push(parseInt(arr[i + 1]));
  }
  return { left, right };
};

function santaLocationList() {
  let { left, right } = challenge1();
  let distance = 0;
  const l = left.length;

  if (left.length !== right.length) return "arrays are not a pair";
  for (let i = 0; i < l; i++) {
    console.log(left.length, right.length);

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

console.log(santaLocationList());
