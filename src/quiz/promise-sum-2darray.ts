async function sumOfRow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rowIdx >= arr.length || rowIdx < 0) {
                reject('Invalid row index');
            } else if (arr[rowIdx].length === 0) {
                reject('Cannot sum an empty row');
            }

            let sum = 0;
            for (let j = 0; j < arr[rowIdx].length; j++) {
                console.log(`Adding ${arr[rowIdx][j]} to sum`);
                sum += arr[rowIdx][j];
            }
            resolve(sum);
        }, 0);
    });
}

async function calculateSum(arr: number[][]) {
    if (arr.length === 0) {
        throw 'Cannot sum an empty array';
    }
    try {

        let rowSumPromises: Promise<number>[] = [];
        for (let i = 0; i < arr.length; i++) {
            rowSumPromises.push(sumOfRow(arr, i));
        }
        const res = await Promise.all(rowSumPromises);
        //console.log('Row sums:', rowSumPromises);
        let sum = res.reduce((acc, curr) => acc + curr, 0);
        return sum;
    } catch {
        throw 'Failed to calculate sum';
    }
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


calculateSum(array2D_1)
    .then((res) => console.log('calculateSum:', res))
    .catch((err) => console.log('calculateSum:', err));

calculateSum([])
    .then((res) => console.log('calculateSum:', res))
    .catch((err) => console.log('calculateSum:', err));