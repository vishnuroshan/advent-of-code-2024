const readInput = require("./input");
const pattern = new RegExp(/mul\(\d{1,3}\,\d{1,3}\)|do\(\)|don't\(\)/g);

function mul(a, b) {
  return a * b;
}
function parseMulFunction() {
  const str = fs.readFileSync(__dirname + "/input.txt").toString();
  return str.match(pattern);
}

function executeStringExp() {
  const arr = parseMulFunction();
  let solution = 0;
  const stack = [];
  // using stack
  arr.forEach((exp) => {
    if (exp === "don't()") {
      stack.push("don't");
    }
    if (exp === "do()") {
      stack.length = 0;
    }
    if (exp.includes("mul") && stack.length < 1) {
      console.log(exp);
      solution = solution + eval(exp);
    }
  });

  return solution;
}
console.log(executeStringExp());
