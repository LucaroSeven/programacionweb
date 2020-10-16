// 2015
//Ecma script

//default variables
//antes
function newFunction(name, age, country){
    var name = name || "Jesus";
    var age = age || "29";
    var country = country || "MX";
    console.log(name, age, country);
}
//nuevo
function newFunction2(name = "Jesus", age=36, country="COL"){
    console.log(name, age, country);
}

//Tmple literals
//before
let hello = "Hello";
let world = "World"
let phrase = hello + ' ' + world;

//ES 6
let phrase = `hello ${world}`

//Multiline
let phraseMulti = "Hola \nMundo"

//ES 6
let phraseMulti = `Hola
Mundo`

//DESTRUCT
let person={
    name: "Jesus",
    age: 29,
    country: "MX"
}

let {name, age} = person;
console.log(name, age)

//SPREAD OPERATOR
let team1 = ["Jesus", "Julian", "Ricardo"]
let team2 = ["Valeria", "Jessica"]

let education = ["david", ...team1, ...team2]

// LET
{
    var global = "Global var";
}
{
    let globalLet = "Global let"
}

//
let name = "Jesus";
let age = 29;

let obj = {name: name, age: age}
let obj2 = {name, age}

//Arrow Function
const names = [
    {name: "Jesus", age: 29},
    {name: "Jessica", age: 28}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

//ES 6
let listOfNames2 = names.map((item) => console.log(item.name));
let listOfNames3 = names.map((item) => item.name)
let listOfNames4 = names.map((item) =>{
    let name_age = `${name} ${age}`;
    return name_age;
})
listOfNames5 = (name, age)=>{
    let name_age = `${name} ${age}`;
    return name_age;
}
let square = (num) => num * num
square(7) //49

//timeout
let functionTimeOut = (interval) => {
    setTimeout(()=>console.log(`${interva} miliseconds later`), interval)
}

//
const helloPromise = () =>{
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve("Hey, well done!");
        } else {
            reject("WRONG!");
        }
    });
};


//Las promesas se hacen en otro hilo
helloPromise().then((response) => console.log(response))
.catch((error)=>console.log(error));

//Clases

class Calculator{
    constructor(){
        this.valueA = 0;
        this.ValueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(3, 5))

//MODULE
import { hello } from "./module"
hello();

//GENERADORES
function* helloWorld(){
    if (true) {
        yield `Hello, `
    }
    if (true) {
        yield `World!`
    }
}

const generate = helloWorld();
console.log(generate.next().value);
