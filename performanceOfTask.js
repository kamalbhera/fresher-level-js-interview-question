// how to know performance of a task
// means how long it takes to complete a task
// we can know this by wrapping our task or operation with performance.now()
// then by subtracting startTime of performance.now() from endTime of performance.now() we can get the time in ms(milliseconds) taken by our task or operation

// for e.g we want to know what time it takes to to do a for loop from 1-50
// Since the 'perf_hook' module exports multiple constructs (objects, functions, constants, etc.), we will need to explicitly specify which construct we wish to use. In this case, we need the performance construct. we can use object destructuring to get performance

const { performance } = require("perf_hooks");
const startTime = performance.now();

for (let i = 1; i < 50; i++) {
	console.log(i);
}

const endTime = performance.now();

console.log(`For loop from 1-50 took ${endTime - startTime} milliseconds`);
// For loop from 1-50 took 25.645699992775917 milliseconds
