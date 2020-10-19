// function saveArticle(){
//     var article = document.getElementById("inputArticle");

//     var ulArticles = document.getElementById("ulArticles");
//     ulArticles.innerHTML += "<li>"+article.value+"</li>"

//     article.value = ""
//     article.focus();
// }

function add(){
    var make = document.getElementById("inputMake");
    var model = document.getElementById("inputModel");
    var year = document.getElementById("inputYear");

    var table = document.getElementById("table")

    if (make.value == "" || model.value == "" || year.value == "") {
        var camposVacios = "";
        camposVacios += make.value == "" ? "Make " : "";
        camposVacios += model.value == "" ? "Model " : "";
        camposVacios += year.value == "" ? "Year " : "";
        alert("Campos vacios: "+camposVacios);

        return;
    }

    table.innerHTML += 
    `
    <tr id="tableRow">
        <td>${make.value}</td>
        <td>${model.value}</td>
        <td>${year.value}</td>
    </tr>
    `;
    // alert("Datos insertados");
}

function clearInput(){
    var row = document.getElementById("tableRow");
    var table = document.getElementById("table")

    if (row == null) {
        alert("No se encontro fila");
        return;
    }
    table.deleteRow(1);
}

function deleteAll(){
    var table = document.getElementById("table");
    var rows = table.rows.length;

    if (rows == 1) {
        alert("No hay datos")
    }

    console.log("Rows: "+rows)
    for (let i = 1; i < rows; i++) {
        table.deleteRow(1);
    }
}