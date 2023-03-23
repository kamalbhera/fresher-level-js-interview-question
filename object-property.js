const students = [
    {
        id: 23,
        name: 'Jisan'
    },
    {
        id: 12,
        name: 'Shawon'
    },
    {
        id: 54,
        name: 'Shakil'
    },
    {
        id: 1,
        name: 'Mursalin'
    },
    {
        id: 20,
        name: "Jihad"
    }
]

//we used basic for loop to get all the name from an array of object
let outputArr = [];
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const studentName = student.name;
    outputArr.push(studentName);

}
console.log(outputArr);

//apply map method to get all students name
const studentNames = students.map(s => s.name);
console.log(studentNames);

//apply filter
const weekStudent = students.filter(s => s.id > 20)
console.log(weekStudent)

//apply find
const biggerOne = students.find(s => s.id > 20);
console.log(biggerOne);
