// swap variable values
// suppose we have 2 variables a and b, we want to swap there value
// for example the value of variable a and b are 2,3. the result would be a = 3, and b = 2

// using temp variable
let a = 2;
let b = 3;
let temp = a;
a = b;
b = temp;
console.log(a, b); // expected output: a = 3, b = 2

// // using array destructuring
[a, b] = [b, a];
console.log(a, b); // expected output: a = 3, b = 2

// using math in one line
b = a + (a = b) - b;
console.log(a, b); // expected output: a = 3, b = 2

// using arithmetic operator
a = a + b; // add a,b then assign to a(a = 5)
b = a - b; // subtract b(3) from a(5) and assign to b(2)
a = a - b; // subtract b(2) from a(5) and assign to a(3)
console.log(a, b);
