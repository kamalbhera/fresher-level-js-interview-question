// compare 2 array by value

function hasSameValue(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((v, i) => v == arr2[i]);
}

let arr1 = [1, 3, 5, 7];
let arr2 = [1, 3, 5, 7];
console.log(hasSameValue(arr1, arr2));
