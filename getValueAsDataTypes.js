// get input element values as data types
// by default input element values data type is string
// if we want to get any specific input element values as number data types
// simply add 'valueAsNumber' at the end of that element finding
// also by adding 'valueAsData' at the end will return date data types

function getDataType() {
	const inputNumber = document.getElementById("inputNumber").valueAsNumber;
	console.log(typeof inputNumber);
	alert(typeof inputNumber);
}
