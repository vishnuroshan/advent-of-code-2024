const fs = require("fs");
const pattern = new RegExp(/mul\(\d{1,3}\,\d{1,3}\)/g);
function mul(a, b) {
  return a * b;
}
function parseMulFunction() {
  const str = fs.readFileSync(__dirname + "/input.txt").toString();
  return str.match(pattern);
}
function executeStringExp() {
  const arr = parseMulFunction();
  if (arr.length) {
    const res = arr.reduce((acc, curr) => {
      const result = eval(curr);
      acc += result;
      return acc;
    }, 0);
    return res;
  }
  return null;
}
console.log(executeStringExp());
