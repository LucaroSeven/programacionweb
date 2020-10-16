function saveArticle(){
    var article = document.getElementById("inputArticle");

    var ulArticles = document.getElementById("ulArticles");
    ulArticles.innerHTML += "<li>"+article.value+"</li>"

    article.value = ""
    article.focus();
}