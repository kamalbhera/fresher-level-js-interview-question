// short conditionals/ short circuit evaluation 
// suppose we've a variable pocketMoney and an if conditional and it checks if pocketMoney > 150 then log something on console like this

let pocketMoney = 120;
if (pocketMoney == 150) {
	console.log("Lunch with biriyani");
}

// we can do this in a short way using short conditional AND(&&) operator
// it means if the condition is true do this if not nothing todo
pocketMoney == 150 && console.log("Lunch with biriyani");

if (pocketMoney != 150) {
	console.log("Only coke is real");
}
// similarly we can use short conditional OR(||) operator to handle false condition
// if the condition is false do this
pocketMoney == 150 || console.log("Only coke is real");
