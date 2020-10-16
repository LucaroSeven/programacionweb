var articles = [
    { name: "Xbox Series X", price: 500},
    { name: "Playstation 5", price: 400},
    { name: "Nintendo Switch", price: 300},
    { name: "Xbox 360", price: 100},
    { name: "PC Gamer", price: 100000}
];

var filtered_articles = articles.filter(function(articles){ 
    return articles.price < 400;
})//regresa articules con precio menor a 400

var mapped_articles = articles.map(function(articles){
    return "<div>"+articles.name+"<div>"
})

var found_article = articles.find(function(article){
    return article.name == "Xbox 360"
})

articles.forEach(function(article){
    console.log(article.name)
});