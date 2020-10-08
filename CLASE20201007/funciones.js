function mifuncion(a, b){
    var result = a+b;

    return result;
}

//Expresion o anonimas
var myFunction = function(){
    return 5
}

//Imprimir
var name = "Luis"
console.log('Hola ' + name)
console.log('');

//Scope global
var name = "Jesus";
console.log(name);

//Scope local
function unafuncion(){
    var lastname = "Rios"
}
console.log(lastname);//no funciona