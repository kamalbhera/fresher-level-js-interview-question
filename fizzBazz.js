/*
Problem: create a loop that execute from 1-100
i) Every time you reach a multiple of 3(3, 6, 9 etc) you replace the number with the word "Fizz" or log "Fizz"
ii) Every time you reach a multiple of 5(5, 10, 15, etc) you replace the number with "Buzz" or log "Buzz"
iii) and if you reach a multiple of 3 AMD 5(15, 30, 46 etc) you replace the number with "FizzBuzz" of log "FizzBuz"
iv) if any of the above condition isn't true then log the current number 
*/
function normalFizzBuzz(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
// normalFizzBuzz(1, 10);

// solve this FizzBuzz question without using reminder % operator
function isFloatNum(num) {
	// console.log(num);
	return num.toString().includes(".");
}
function withoutRemFizzBuzz(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		if (!isFloatNum(i / 3) && !isFloatNum(i / 5)) {
			console.log("FizzBuzz");
		} else if (!isFloatNum(i / 3)) {
			console.log("Fizz");
		} else if (!isFloatNum(i / 5)) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
// withoutRemFizzBuzz(1, 100);
