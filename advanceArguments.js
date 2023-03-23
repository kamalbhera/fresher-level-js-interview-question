function add(num1, num2) {
    const argu = [...arguments];
    let sum = 0;
    for (let i = 0; i < argu.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

const result = add(5, 3, 2, 10)
console.log(result)
