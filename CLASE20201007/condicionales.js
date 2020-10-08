if(true){
    console.log("true")
}else{
    console.log("false")
}

//ternarias
var numero = 1;
var result = numero === 1 ? "si es uno" : "no es uno"
console.log(result)


//switch
numero = 1;
switch (numero) {
    case 1:
        console.log("Soy uno");
        break;

    default:
        console.log("Soy el numero: "+numero);
        break;
}