// make a function that sorts its arguments without using loops

function sortArr() {
	// return Object.values(arguments)
	// 	.flat(Infinity)
	// 	.sort((a, b) => a - b);

	// return [].slice.call(arguments).sort());

	return [...arguments].flat().sort();
}

const arr = [23, 35, 22, 6, 1, 76, 12, 43];
console.log(sortArr(arr));
