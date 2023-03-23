// remove duplicate from array
const arr = [1, 2, 3, 3, 4, 5, 3, 5];

// element of set can never be duplicate
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
