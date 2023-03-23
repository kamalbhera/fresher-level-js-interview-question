// fibonacci sequence
// A fibonacci sequence is an ordering of numbers where each number is the sum of teh preceding two. For example, the first ten numbers of teh Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21

// the fibonacci challenge usually goes something like this: write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function

//fibo[2] = fibo[2 - 1] + fibo[2 - 2];
//fibo[3] = fibo[3 - 1] + fibo[3 - 2];
//fibo[n] = fibo[n - 1] + fibo[n - 2];
//fibo[i] = fibo[i - 1] + fibo[i - 2];

// using for loop
function getFibonacci(num) {
	let fibo = [0, 1];

	for (let i = 2; i <= num; i++) {
		// fibo[i] = fibo[i - 1] + fibo[i - 2];
		let currentFibNum = fibo[i - 1] + fibo[i - 2];
		fibo.push(currentFibNum);
	}
	return fibo[num];
}
// console.log(getFibonacci(5));

//create a Fibonacci series in a recursive way
//fibo[n] = fibo[n-1] + fibo[n-2]

function getFib(n) {
	// base case (if n is either 0 or 1 return that num)

	if (n < 2) {
		return n;
	}

	// recursive case (main part)
	return getFib(n - 1) + getFib(n - 2);
}
console.log(getFib(6));
