// flatten any multi-dimensional array
// suppose we have an array of numbers and some of the items are array
// now how can we flat this multi-dimensional array into one single array
// the answer is simple, we can use array flat() method

const numbers = [1, 2, [3, 4, 5], 6, [7, 8]];
console.log(numbers.flat()); // [1,2,3,4,5,6,7,8]

// what if we have an array and that array have an element of array and that array have an element of array and so on
// what would we do to flatten that array into one single array?
// No worries! we can pass Infinity to the flat() method like array.flat(Infinity)
// as simple as it is!

const numbers2 = [9, 10, [11, 12, [13, 14, 15]], 16];
console.log(numbers2.flat(Infinity)); // [9, 10, 11, 12,13, 14, 15, 16]
