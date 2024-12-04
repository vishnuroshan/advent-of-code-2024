const readInput = require("./input")

const rules = {
    'X': ['M'],
    'M': ['X', 'A'],
    'A': ['M', 'S'],
    'S': ['A']
}

function checkXMAS(arr, row, col, surroundingValArr) {
    const elem = arr[row][col];
    surroundingValArr.forEach(e => {
        const isCurrent = rules[e?.val] && rules[arr[row][col]].includes(e?.val);
        console.log(`val: ${arr[row][col]}. surrounding val: i:${e.i}, j:${e.j} :${e?.val}, acceptedVals: ${rules[e?.val]}, so: ${isCurrent}`)
        // if (isCurrent) {
        //     const surr = getSurroundingVals(arr, e.i, e.j)
        //     checkXMAS(arr, e.i, e.j, surr);
        // }
    })
    if (arr[row][col] === 'X') {
        rules['X'].includes(arr[row])
    }
    return true;
}


function wordSearch() {
    // const arr = readInput();
    const arr = [
        ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
        ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
        ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
        ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X'],
        ['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
        ['X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A'],
        ['S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S'],
        ['S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A'],
        ['M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M'],
        ['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X']
    ];

    if (arr.length !== arr[0].length) return `not ok ${arr.length} ${arr[0].length}`;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0 || j === 0 || i === arr.length - 1 || j === arr.length - 1) {

                if (arr[i][j] === 'X' || arr[i][j] === 'S') {
                    console.log('edge::>', i, j, arr[i][j]);
                    const surroundingVal = getSurroundingVals(arr, i, j);
                    checkXMAS(arr, i, j, surroundingVal);
                }
            } else {
                console.log('not edge::>', i, j, arr[i][j]);
                const surroundingVal = getSurroundingVals(arr, i, j);
                checkXMAS(arr, i, j, surroundingVal);
            }

        }
    }
}

function getSurroundingVals(arr, i, j) {
    const surroundingVal = [];
    // if (i === 0 || j === 0 || i === arr.length - 1 || j === arr.length - 1) {
        // surroundingVal.push({ i: i + 1, j, val: arr[i + 1]?.[j] });
        // surroundingVal.push({ i: i + 1, j: j + 1, val: arr[i + 1]?.[j + 1] });
        // surroundingVal.push({ i, j: j + 1, val: arr[i]?.[j + 1] });

    // } else {
        // top 3
        surroundingVal.push({ i: i - 1, j: j - 1, val: arr[i - 1]?.[j - 1] });
        surroundingVal.push({ i: i - 1, j, val: arr[i - 1]?.[j] });
        surroundingVal.push({ i: i - 1, j: j + 1, val: arr[i - 1]?.[j + 1] });
        // middle 2
        surroundingVal.push({ i, j: j - 1, val: arr[i]?.[j - 1] });
        surroundingVal.push({ i, j: j + 1, val: arr[i]?.[j + 1] });

        surroundingVal.push({ i: i + 1, j: j - 1, val: arr[i + 1]?.[j - 1] });
        surroundingVal.push({ i: i + 1, j, val: arr[i + 1]?.[j] });
        surroundingVal.push({ i: i + 1, j: j + 1, val: arr[i + 1]?.[j + 1] });

    // }
    return surroundingVal.filter(e=>e.val);
}

console.log(wordSearch())