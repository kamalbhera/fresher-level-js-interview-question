/*
  Write a pure function that accepts an array of strings, return the
  longest string. Use no loops.
 */

function longestStrFunc(arrOfStr) {
	let longest = arrOfStr.reduce(
		(accStr, currentStr) =>
			currentStr.length > accStr.length ? currentStr : accStr,
		""
	);
	let multipleLongest = arrOfStr.filter((str) => str.length == longest.length);

	return multipleLongest.length > 1 ? multipleLongest : longest;
}

const friendsName = ["Shawon", "Mursaline", "Porag", "Asad"];
const longestFriend = longestStrFunc(friendsName);
console.log(longestFriend);

// using for loop
function longestString(arrOfStr) {
	let longest = "";
	for (let i = 0; i < arrOfStr.length; i++) {
		if (arrOfStr[i].length > longest.length) {
			longest = arrOfStr[i];
		}
	}
	let multipleLongest = arrOfStr.filter((str) => str.length == longest.length);

	return multipleLongest.length > 1 ? multipleLongest : longest;
}
console.log(
	longestString(["Shawon", "Mursaline", "jisanmiaa", "Porag", "Asad"])
);
