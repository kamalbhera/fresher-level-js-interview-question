// resize any array
// suppose we have an arr of numbers between 1-10
// we want that arr to hold numbers between 1-7
// we can use arr length property to resize array
// now assign the arr length you want on arr.length
// as simple as it is

// e.g
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.length = 7;
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7];
