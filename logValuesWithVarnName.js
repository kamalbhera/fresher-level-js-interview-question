// log values with variable names smartly
const language1 = "JavaScript";
const language2 = "Python";

// we can do this but it is not an smart way
console.log(`language1 - ${language1}`); // language1 - JavaScript
console.log(`language2 - ${language2}`); // language2 - Python

// below is the smart way to do this
console.log({ language1 }); // { language1: 'JavaScript' }
console.log({ language2 }); //{ language2: 'Python' }
