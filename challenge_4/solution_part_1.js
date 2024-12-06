const readInput = require("./input")

const rules = {
    'X': ['M'],
    'M': ['X', 'A'],
    'A': ['M', 'S'],
    'S': ['A']
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
    let count = 0;
    if (arr.length !== arr[0].length) return `not ok ${arr.length} ${arr[0].length}`;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                const surroundingValToX = getSurroundingVals(arr, i, j).filter((e) => e.val === 'M');
                console.log('surroundingValToX: ',surroundingValToX)
                if (surroundingValToX.length > 0) {
                    for (let x = 0; x < surroundingValToX.length; x++) {
                        const val = getSurroundingVals(arr, surroundingValToX[x].i, surroundingValToX[x].j);
                        const surroundingValToM = val.filter((e) => e.val === 'A');
                        console.log('surroundingValToM: ',surroundingValToM)
                        for (let b = 0; b < surroundingValToM.length; b++) {
                            const surroundingValToA = getSurroundingVals(arr, surroundingValToM[b].i, surroundingValToM[b].j).filter((e) => e.val === 'S');
                            console.log('surroundingValToA: ',surroundingValToA)
                            for (let s = 0; s < surroundingValToA.length; s++) {
                                
                                // const surroundingValToA = getSurroundingVals(arr, s.i, s.j).filter((e) => e.val === 'S');
                                count++;
                            }
    
                        }

                    }
                }
            }
        }
    }

    return count;
}


// function check(arr, i, j, toCheck) {
//     return getSurroundingVals(arr, i, j).filter((e) => e.val === toCheck);
// }

// function check(arr, row, col, surroundingValArr, history = ['M', 'A', 'S']) {
//     const firstPart = [];
//     const elem = arr[row][col];
//     if (!history.includes(elem)) {
//         surroundingValArr.forEach(e => {
//             const isCurrent = rules[e?.val] && rules[elem].includes(e?.val);

//             if (isCurrent) {
//                 console.log(`val: ${elem}.\n
//                 surrounding val: i:${e.i}, j:${e.j} :${e?.val},\n
//                 acceptedVals: ${rules[elem]},\n
//                 so: ${isCurrent}`);
//                 firstPart.push(e);
//                 // checkX(arr, e.i,e.j,getSurroundingVals(arr, e.i,e.j), [elem])
//             }
//         });
//     }
//     console.log(firstPart)
//     return firstPart;
// }

function getSurroundingVals(arr, i, j) {
    const surroundingVal = [];
    /**
     * bottom row
     * arr[i-1][j+1]
     * arr[i-1][j]
     * arr[i-1][j+1]
     * 
     * top row
     * arr[i+1][j-1]
     * arr[i+1][j]
     * arr[i+1][j+1]
     * 
     * same  row
     * arr[i][J+1]
     * arr[i][J-1]
     */
    surroundingVal.push({ i: i - 1, j: j - 1, val: arr[i - 1]?.[j - 1] });
    surroundingVal.push({ i: i - 1, j, val: arr[i - 1]?.[j] });
    surroundingVal.push({ i: i - 1, j: j + 1, val: arr[i - 1]?.[j + 1] });
    // middle 2
    surroundingVal.push({ i, j: j - 1, val: arr[i]?.[j - 1] });
    surroundingVal.push({ i, j: j + 1, val: arr[i]?.[j + 1] });

    surroundingVal.push({ i: i + 1, j: j - 1, val: arr[i + 1]?.[j - 1] });
    surroundingVal.push({ i: i + 1, j, val: arr[i + 1]?.[j] });
    surroundingVal.push({ i: i + 1, j: j + 1, val: arr[i + 1]?.[j + 1] });
    console.log(surroundingVal.filter(e => e.val));
    return surroundingVal.filter(e => e.val && e.val !== arr[i][j]);
}

console.log(wordSearch())