/*
  Write a function that will reverse the letters of words in a
  sentence, without altering the position of the words, or the
  punctuation.
 */

// it reverse punctuation too
function reverseWord(str) {
	let splitWords = str.split(" ");
	let reverse = splitWords.map((word) => word.split("").reverse().join(""));
	return reverse.join(" ");
}

const reversedWords = reverseWord("Hello, world! Happy Hacking!");
console.log(reversedWords);

// it doesn't reverse punctuation
function solution2(str) {
	return str
		.split(" ")
		.map((word) =>
			word
				.split(/([a-zA-Z]+)/)
				.map((word) => word.split("").reverse().join(""))
				.join("")
		)
		.join(" ");
}
console.log(solution2("Hello, world! Happy Hacking!"));
