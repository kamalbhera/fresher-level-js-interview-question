// what will be the sum of two blank array([])

console.log([] + []); // it'll output blank ""
// why?
// ok, in JS +(plus) operator used for 2 purposes
// first, arithmetic operations like, 5+6 = 11
// second, string concatenations like, 'Jis'+'an' = 'Jisan'

// but, if there is a cross datatype i mean if one side operand has string datatype of +(plus) operator and other side has number datatype or "jisan"+5, 'jisan'+[], [] + {} etc.
// in these case JS has to do typecast
// means data will be converted to string
// in above example blank array([]) converts into string
// and string conversion of blank array([]) is blank string("")
// hence ""+"" = ""

// same goes here
console.log({} + []); // it'll output [object object]
// because string conversion of blankObj{} is [object object] and [] = ""
// '[object object]' + "" = '[object object]'

console.log([] + ""); // blank("")

// exceptional cases
// if we do same operations with boolean and numbers
// boolean will convert into number datatype and then it will add with another number operand
// boolean true = 1 in number, boolean false = 0 in number
console.log(true + 3); // output 4
// 1 + 3 = 4
console.log(6 + false); // output 6
// 6 + 0 = 6
console.log(8 + true + false); // output 9
// you know it
