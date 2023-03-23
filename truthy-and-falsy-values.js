/*falsy values*/
// 0
// ""(blank)
// false
// undefined
// null
// NaN (Not a number)

/*truthy value*/
// "0", " ", [](empty array), {}(empty object), any number other than 0, "false"

// the value/number 0 always returns false and any other number/value(-1, 3) always returns true
//so, every number value is truthy other than 0

const age = 0;

if (age) {
	console.log("condition is true");
} else {
	console.log("condition is false");
}
//output: false

//if the length of an string is 0 or an empty string('') returns false
//every string value is truthy other than empty string
const name = "";
if (name) {
	console.log("condition is true");
} else {
	console.log("condition is false");
}
// output : false

// if you declare a variable with var or let keyword and never assign any value, the value of this variable will be undefined
//if assign null value to any variable, it will return false
//undefined value is falsy
//null value also is falsy
// NaN value is also falsy
// false value is also falsy
let name1;
console.log(name1);
if (name1) {
	console.log(true);
} else {
	console.log(false);
}
//output: false
