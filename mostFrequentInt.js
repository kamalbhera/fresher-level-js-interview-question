/*
  Write a function that will return the most frequent integer in a list,
  if there is a tie, return both
 */

function getMostFreqInt(ints) {
	let intCount = {};

	for (let i = 0; i < ints.length; i++) {
		intCount[ints[i]] = intCount[ints[i]] ? intCount[ints[i]] + 1 : 1;
	}

	/* get intCount obj using reduce method
	let intCount1 = ints.reduce((acc, int) => {
		acc[int.toString()] = Object.keys(acc).includes(int.toString())
			? acc[int] + 1
			: 1;
		return acc;
	}, {}); */

	let mostInts = Object.keys(intCount).filter(
		(key) => intCount[key] === Math.max(...Object.values(intCount))
	);

	return mostInts;
}

const integers = [4, 5, 1, 6, 4, 11, 4, 9, 1, 1];
const result = getMostFreqInt(integers);
console.log(result);
