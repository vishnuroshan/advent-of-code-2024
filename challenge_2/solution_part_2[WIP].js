const c2 = require("./input");

const challenge2 = () => {
  let arr = c2.split(/\n/g);
  arr = arr.map((e) => e.split(",").map((e) => parseInt(e)));
  //   return arr;
  return [
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
    [9, 7, 6, 2, 1],
    [1, 2, 7, 8, 9],
  ];
};

function problemDampener(arr, i, sign) {
  console.log(
    "is sign same",
    sign === Math.sign(arr[i]),
    arr,
    arr[i],
    " curr:",
    arr[i] - arr[i + 1],
    " prev:",
    arr[i - 1] - arr[i],
    " next:",
    arr[i] - arr[i + 2]
  );
  const prev = arr[i - 1] - arr[i];
  const next = arr[i] - arr[i + 2];

  if (sign === Math.sign(prev) || (prev !== 0 && prev >= -3 && prev <= 3)) {
    return true;
  }
  if (sign === Math.sign(next) || (next !== 0 && next >= -3 && next <= 3)) {
    return true;
  }
  return false;
}

function checkSafetyForArray(array) {
  let arr = [...array];
  const isSafe = [];
  let sign;
  let isDone = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== undefined) {
      const diff = arr[i] - arr[i + 1];
      // if no sign assign
      if (!sign) sign = Math.sign(diff);
      if (sign !== Math.sign(diff)) {
        // if sign changes, then its not safe
        if (!isDone) {
          if (problemDampener(arr, i, sign)) isSafe.push(true);
          isDone = true;
        } else {
          isSafe.push(false);
        }
        // if diff is greater or equal then -3 and less then or equal to 3, its safe
      } else if (diff !== 0 && diff >= -3 && diff <= 3) {
        isSafe.push(true);
      } else {
        // is diff is greater then 3, its not safe
        if (!isDone) {
          if (problemDampener(arr, i, sign)) isSafe.push(true);
          isDone = true;
        } else {
          isSafe.push(false);
        }
      }
    }
  }
  //   if (c > 0) console.log("arr:> ", arr, isSafe);
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
