// From a 2D array of integers in src / quiz / promise - neg.ts, log any row that has at least one
// negative number.Use concurrency methods in promise for faster execution.

function hasNegative(arr: number[][], row: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (row >= arr.length || row < 0) {
                reject('Invalid row index');
            } else if (arr[row].length === 0) {
                reject('Cannot check an empty row');
            }

            for (let j = 0; j < arr[row].length; j++) {
                if (arr[row][j] < 0) {
                    resolve(row);
                }
            }
            reject('No negative number in row');
        }, 0);
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let rowNegPromises: Promise<number>[] = [];
for (let i = 0; i < array2D_3.length; i++) {
    rowNegPromises.push(hasNegative(array2D_3, i));
}

//I want to use promise.any
Promise.any(rowNegPromises)
    .then((res) => console.log('Row with negative number:', res))
    .catch((err) => console.log('No row with negative number:', err));