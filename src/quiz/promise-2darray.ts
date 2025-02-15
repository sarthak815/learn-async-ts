/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        /** schedule the execution of the function to the next event loop cycle.
         * This is done using setTimeout() to simulate an asynchronous operations.
         * 
         * Replace the logic in the setTimeout() with the actual logic to sum the numbers
         * to understand the difference in execution with and without setTimeout()
        //  **/
        // setTimeout(() => {
        //     let sum = 0;
        //     for (let i = 0; i < arr.length; i++) {
        //         for (let j = 0; j < arr[i].length; j++) {
        //             console.log(`Adding ${arr[i][j]} to sum`);
        //             sum += arr[i][j];
        //         }
        //     }
        //     resolve(sum);
        // }, 0);

        let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
        resolve(sum);
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D).then((res) => console.log('sumPromise1:', res)).catch((err) => console.log('sumPromise1:', err));

const sumPromise2 = sum2DArray([]).then((res) => console.log('sumPromise2:', res)).catch((err) => console.log('sumPromise2:', err));
// console.log('sumPromise2:', sumPromise2);
