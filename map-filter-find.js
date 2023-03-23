const numbers = [3, 2, 6, 4, 7, 8];
let output = [];

// basic for loop system
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const mul = element * element;
    output.push(mul);
}


// if we pass a function to map, we can pass 3 parameter to this function:
// first is element, second index and third the full array

const result = numbers.map(function (element) {
    return element * element;

});

//more easy way
const result2 = numbers.map(element => element * element);

const result3 = numbers.map(x => x * x);

console.log(result3);


//ok, map has some bai-brothers

//it only returns the matching elements that fulfills the condition
const filterResult = numbers.filter(x => x % 2 == 0);
console.log(filterResult);

//find
const findResult = numbers.find(x => x > 5);
console.log(findResult)


//forEach
numbers.forEach(x => {
    console.log(x)
})



// map returns an array
//filter returns an array
//find returns only an element
