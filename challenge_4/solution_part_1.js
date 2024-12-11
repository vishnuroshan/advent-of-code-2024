const readInput = require("./input");

const rules = {
  X: ["M"],
  M: ["X", "A"],
  A: ["M", "S"],
  S: ["A"],
};

function rotateMatrix(matrix) {
  let rotatedMatrix = [];

  rotatedMatrix = matrix[0].map((val, index) =>
    matrix.map((row) => row[index]).reverse()
  );
  return rotatedMatrix;
}

function getDiagonals(m) {
  var s,
    x,
    y,
    d,
    o = [];
  for (s = 0; s < m.length; s++) {
    d = [];
    for (y = s, x = 0; y >= 0; y--, x++) d.push(m[y][x]);
    o.push(d);
  }
  for (s = 1; s < m[0].length; s++) {
    d = [];
    for (y = m.length - 1, x = s; x < m[0].length; y--, x++) d.push(m[y][x]);
    o.push(d);
  }
  return o;
}

function wordSearch() {
  // const arr = readInput();

  const arr = [
    ["M", "M", "M", "S", "X", "X", "M", "A", "S", "M"],
    ["M", "S", "A", "M", "X", "M", "S", "M", "S", "A"],
    ["A", "M", "X", "S", "X", "M", "A", "A", "M", "M"],
    ["M", "S", "A", "M", "A", "S", "M", "S", "M", "X"],
    ["X", "M", "A", "S", "A", "M", "X", "A", "M", "M"],
    ["X", "X", "A", "M", "M", "X", "X", "A", "M", "A"],
    ["S", "M", "S", "M", "S", "A", "S", "X", "S", "S"],
    ["S", "A", "X", "A", "M", "A", "S", "A", "A", "A"],
    ["M", "A", "M", "M", "M", "X", "M", "M", "M", "M"],
    ["M", "X", "M", "X", "A", "X", "M", "A", "S", "X"],
  ];
  let count = 0;
  //0%
  count = count + countXmas(arr);
  // 90%
  const rotated = rotateMatrix(arr);
  count = count + countXmas(rotated);
  // 180%
  const rotatedA = rotateMatrix(rotated);
  count = count + countXmas(rotatedA);
  // last
  const rotatedAA = rotateMatrix(rotatedA);
  count = count + countXmas(rotatedAA);

  // diagonal 0%
  const diagonals = getDiagonals(arr);
  count = count + countXmas(diagonals);

  // diagonal 90%
  // const diagonalRotated = getDiagonals(rotated);
  // count = count + countXmas(diagonalRotated);

  // diagonal 180%
  // const diagonalRotatedA = getDiagonals(rotatedA);
  // count = count + countXmas(diagonalRotatedA);

  // diagonal last
  // const diagonalRotatedAA = getDiagonals(rotatedAA);
  // console.log(diagonalRotatedAA);
  // count = count + countXmas(diagonalRotatedAA);

  console.log("final count::> ", count);
  return count;
}

function countXmas(matrix) {
  let count = 0;
  const regex = new RegExp(/(XMAS|SAMX)/g);
  for (let each of matrix) {
    const str = each.toString().replaceAll(/,/g, "");
    const matched = str.match(regex);
    matched?.length && console.log(str, matched);
    if (matched?.length) count = count + matched.length;
  }
  return count;
}

console.log(wordSearch());
