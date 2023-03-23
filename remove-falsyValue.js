// remove falsy value from an array
// falsy values
// false, 0 , ""(blank), null, undefined, NaN(Not a Number)

const numArrWithFalsyValues = [1, 2, NaN, 3, "", 4, 5, null, false];

const numsWithoutFalsyValues = numArrWithFalsyValues.filter(Boolean);

console.log(numsWithoutFalsyValues); // [1, 2, 3, 4, 5]

// Explanation
// Boolean(expression) in javascript returns true or false
console.log(Boolean(2 > 3)); // return true since 2 is getter than 3 and so it is true and also returns true
console.log(Boolean(45 > 50)); // return false since 45 is not getter than 50 and so it is false and returns false
console.log(Boolean("Jisan")); // return true since 'Jisan' is not an falsy value
console.log(Boolean("")); // return true since ''(blank) is an falsy value
