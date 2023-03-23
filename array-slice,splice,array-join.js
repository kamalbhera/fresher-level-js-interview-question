const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const part = numbers.slice(2, 5);

const removed = numbers.splice(2, 3, 20, 33, 25);

const together = numbers.join(',');

console.log(removed)
console.log(part);
console.log(together)
console.log(numbers)
