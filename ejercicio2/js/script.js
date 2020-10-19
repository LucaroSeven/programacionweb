function doSum(){
    var num1 = document.getElementById("inputSumNum1");
    var num2 = document.getElementById("inputSumNum2");

    var result = Number(num1.value) + Number(num2.value);
    //console.log(result);

    var lblResult = document.getElementById("lblSumResult");
    lblResult.innerHTML = "Result: "+ result;
}

function doRes(){
    var num1 = document.getElementById("inputResNum1");
    var num2 = document.getElementById("inputResNum2");

    var result = Number(num1.value) - Number(num2.value);
    //console.log(result);

    var lblResult = document.getElementById("lblResResult");
    lblResult.innerHTML = "Result: "+ result;
}

function doMult(){
    var num1 = document.getElementById("inputMultNum1");
    var num2 = document.getElementById("inputMultNum2");

    var result = Number(num1.value) * Number(num2.value);
    //console.log(result);

    var lblResult = document.getElementById("lblMultResult");
    lblResult.innerHTML = "Result: "+ result;
}

function doDiv(){
    var num1 = document.getElementById("inputDivNum1");
    var num2 = document.getElementById("inputDivNum2");

    var result = Number(num1.value) / Number(num2.value);
    //console.log(result);

    var lblResult = document.getElementById("lblDivResult");
    lblResult.innerHTML = "Result: "+ result;
}