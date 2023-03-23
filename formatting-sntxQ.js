// Q. Formatting/ Syntax question
// A trick question often thrown at junior developers is to understand how syntax works. It's something simple, that will often trip you up. Often you be presented with a sheet of paper with printed code or a laptop with it presented on a screen and usually outside of an IDE.
// below example foo1 return {bar: 'hello'} but foo2 function return undefined
// in the right side of return statement there is nothing
// return statement returns what in the right side of it not below of it
// for example
function foo1() {
	return {
		bar: "hello",
	};
}

function foo2() {
	return;
	{
		bar: "hello";
	}
}
// rather foo2 should be
function foo2Solution() {
	return { bar: "hello" };
}
console.log(foo1());
console.log(foo2());
console.log(foo2Solution());
