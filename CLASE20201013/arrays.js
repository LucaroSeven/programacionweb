// var fruits = ["apple", "cherry", "strawberry"];

// //agregar al final
// fruits.push("grapes");

// //eliminar al final
// fruits.pop();

// //agregar al principio
// fruits.unshift("grapes");

// //obtener index
// fruits.indexOf();

var students = ["Jose", "Maria", "Alex", "David"]

function greetStudent(student){
    console.log("Hi, " + student);
}

for (let i = 0; i < students.length; i++) {
    greetStudent(students[i]);
}

for (var student of students){
    greetStudent(student)
}

while (students.length > 0) {
    var student = students.shift();//elimina al principio
    greetStudent(students);
}


