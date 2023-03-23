// convert any value to boolean value

// We can use Boolean(expression) to convert any value into boolean
console.log(Boolean("JavaScript")); // return true
console.log(Boolean(0)); // return false

// also there is a shortcut for converting a value into boolean
// using !!(double not) in front of any value we can convert values into boolean
console.log(!!"JavaScript"); // return true since the value is not a falsy value
console.log(!!0); // return false since 0 is a falsy value
console.log(!!25); // return true and we know there are only 6 falsy values(previously described)
console.log(!!NaN); // return false since Not a Number is a falsy value
