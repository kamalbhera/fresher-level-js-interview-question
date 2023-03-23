// double equals(==) check only the value not the type of the value
//trippe equals(===) check both the value and the data type  

// 2 == '2' //return true
// 2 === '2' // return false

// js has something special
// 0 == false
// 1 == true

// but if we do
// 0 === false //return false
// 0 === true //return false
// because this time we are using trippe equals(===) to compare and we know trippe equal(===) compares both value and type.
//so there,  0  is a number type value and false is is boolean type value
// as 0 and false are not same type so this kind of comparison will return false

//So if we do:
// 0 == false // return true
// 0 == true // return false
// 1 == false // return false
// 1 == true // return true

const first = 2;
const second = "2";

if (first === second) {
    console.log("true")
} else {
    console.log("false")
}

const a = 1;
const b = true;
if (a === b) {
    console.log("true");
} else {
    console.log("false");
}
