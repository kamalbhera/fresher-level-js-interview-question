// what will be the output?
const a = "constructor";
console.log(a[a](01)); // output: 1

// how the output is 1
// we know string is iterable
// first a is string
// second a is 'constructor'
// here we are getting string constructor property and it is the big string function(String())
// so a[a] = String
// and we are passing 01 to String()
// whatever we passes there it becomes string
// like this String(01) = '1'
