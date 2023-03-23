const nums = [1, -2, 3, -4, 5, 6, 7, -8];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > 5) {
        break;
    }
    console.log(num);
}

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
        continue
    }
    console.log(num);
}
