const c2 = require("./input");

const challenge2 = () => {
  let arr = c2.split(/\n/g);
  arr = arr.map((e) => e.split(",").map((e) => parseInt(e)));
  return arr;
};
function checkSafetyForArray(array) {
  let arr = [...array];
  const tArr = [...array];
  const isSafe = [];
  let sign;
  let isDone = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== undefined) {
      const diff = arr[i] - arr[i + 1];
      if (!sign) sign = Math.sign(diff);
      if (sign !== Math.sign(diff)) {
        if (isDone) {
          isSafe.push(false);
        } else {
          const tArr = arr.filter((e) => e !== arr[i + 1]);
          const isOk = checkSafetyForArray(tArr).every((e) => e);
          isDone = true;
          isSafe.push(isOk);
        }

        // if diff is greater or equal then -3 and less then or equal to 3, its safe
      } else if (diff !== 0 && diff >= -3 && diff <= 3) {
        isSafe.push(true);
      } else {
        // is diff is greater then 3, its not safe
        if (isDone) {
          isSafe.push(false);
        } else {
          const tArr = arr.filter((e) => e !== arr[i + 1]);
          const isOk = checkSafetyForArray(tArr).every((e) => e);
          isDone = true;
          isSafe.push(isOk);
        }
      }
    }
  }
  return isSafe;
}

function getSafeReports() {
  const array = challenge2();
  const safeReports = [];
  array.forEach((report, index) => {
    const isSafe = checkSafetyForArray(report);
    if (isSafe.every((e) => e)) safeReports.push(report);
  });

  return safeReports.length;
}

console.log(getSafeReports());
