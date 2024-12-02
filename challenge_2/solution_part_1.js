const c2 = require("./input");

const challenge2 = () => {
  let arr = c2.split(/\n/g);
  arr = arr.map((e) => e.split(",").map((e) => parseInt(e)));
  return arr;
};

function getSafeReports() {
  const array = challenge2();

  const safeReports = [];
  array.forEach((report, i) => {
    let isSafe = [];
    let sign;
    for (let i = 0; i < report.length; i++) {
      if (report[i + 1] !== undefined) {
        const diff = report[i] - report[i + 1];
        if (!sign) sign = Math.sign(diff);
        if (sign !== Math.sign(diff)) isSafe.push(false);
        if (diff !== 0 && diff >= -3 && diff <= 3) isSafe.push(true);
        else isSafe.push(false);
      }
    }
    if (isSafe.every((e) => e)) safeReports.push(report);
  });
  return safeReports.length;
}

console.log(getSafeReports()); // 407
