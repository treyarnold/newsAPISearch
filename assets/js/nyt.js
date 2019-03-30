<<<<<<< HEAD
$(document).ready(function(){


//  $("#searchTerm").keyup(function (event) {
//     if (event.keyCode === 13) {
//         var search = $("#searchTerm").val();
//         searchNews(search);
//         event.preventDefault();
//         // gifs.push(search);
//         search = "";
//         // buttons();
//     }
// });

// function searchNews(search){

// }


$("#search").on("click", function(){
    event.preventDefault();
    var query = $("#searchTerm").val();
    newsSearch(query);
    console.log(query);
});

function newsSearch(search){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function (response){
        console.log(queryURL.articles.source.name)
    })
}

var url = 'https://newsapi.org/v2/everything?' +
          'q=' + query +
          '&from=2019-03-30&' +
          'sortBy=popularity&' +
          'apiKey=81f15c72b7b34ec0a2c3480c6aaf5db0';
=======
const app = {
  searchProperties: {},

  search: function (queryURL){
    var getEm = 'https://newsapi.org/v2/everything?' +
              'q=' + queryURL +
              '&apiKey=81f15c72b7b34ec0a2c3480c6aaf5db0';
    $.ajax({
        url: getEm,
        method: "GET"
    }).then (response =>{
        this.showArticles(response);
    })
  },

  showArticles: function (response) {
    $("#articleDiv").empty();
    let articleCount = this.searchProperties.recordCount;
    for (let i = 0; i < articleCount; i++) {
      let article = response.articles[i]
      let display =   
        `<div>
          <a href="${article.url}" target="_blank"><h2>${article.title}</h2></a>
          <p><em>${article.source.name}</em</p>
          <p>${article.description}</p>
        </div>`
      $("#articleDiv").prepend(display);
    }
  }
}
>>>>>>> 20021a46bcd7d509d9fef408ffad8d9f59d0eb60

$(document).ready(function(){
  $("#search").on("click", function (event){
    event.preventDefault();
    app.searchProperties.searchTerm = $("#searchTerm").val();
    app.searchProperties.recordCount = $("#recordCount").val();
    app.search(app.searchProperties.searchTerm);
  });
});