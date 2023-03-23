// swap array values
const arr = [1, 2, 3, 4, 5];

// using temp variable
let temp = arr[0];
arr[0] = arr[4];
arr[4] = temp;
console.log(arr);

// swap arr values in one line using array destructuring
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log(arr);
