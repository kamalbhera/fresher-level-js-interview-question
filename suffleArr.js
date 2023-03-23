// shuffling array
// suppose we have an array and we want to shuffle that array items randomly

const numbers = [2, 5, 1, 8, 7, 3];

const shuffling = numbers.sort(() => Math.random() - 0.5);
console.log(shuffling);
