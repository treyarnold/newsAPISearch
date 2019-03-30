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

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


// });

$("#search").on("click", () => console.log(event));
});