function doSum(){
    var num1 = document.getElementById("inputNum1");
    var num2 = document.getElementById("inputNum2");

    var result = Number(num1.value) + Number(num2.value);
    //console.log(result);

    var lblResult = document.getElementById("lblSumResult");
    lblResult.innerHTML = "Result: "+ result;
}