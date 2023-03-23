// what will be the output of the below code?

function b() {
	console.log(`the length is ${this.length}`);
}

let a = {
	length: 10,
	method: function (b) {
		arguments[0]();
	},
};

a.method(b, 5); // the length is 2
// lets explain why the length is 2
/*
-> first we created a function b, it logs 'the length is this.length'. here 'this' is who calls the function

-> created an object with a property(length: 10) and a method called method. this method do a function call of fo the first arguments passed to this func

-> lastly I called the method of object 'a' named 'method' by passing function b(previously created) and a number.

-> the function of object a also do function call of first arguments(we know first arguments is function b)

-> 'this' from function b indicates the arguments of the method of object a. We know we passed two arguments to the object method. we got those arguments as array like objects(not arr) using arguments. 

-> so 'this' indicates arguments and in this case this.length(arguments.length) is 2

*/
