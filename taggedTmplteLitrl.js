// what will be the output of below code
function myFunc() {
	return "JavaScript";
}

const result = myFunc`hello`;
// what we did here is:
// we write the func name
//  we used tagged template literals and write hello
// when we write function and template literals beside function name it means that this template literals goes to the function as  arguments.
// in easy word it calls the function with template literal as arguments of that function
// and we get whatever function returns
console.log(result);
