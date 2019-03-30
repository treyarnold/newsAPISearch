const app = {
  searchProperties: {},

  search: function (searchProp) {

  }
}

$(document).ready(function(){

 var search = $("#searchTerm").val();

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

// var url = 'https://newsapi.org/v2/everything?' +
//           'q=' + query +
//           '&from=2019-03-30&' +
//           'sortBy=popularity&' +
//           'apiKey=81f15c72b7b34ec0a2c3480c6aaf5db0';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


// });

$("#search").on("click", function (event){
  event.preventDefault();
  app.searchProperties.searchTerm = $("#searchTerm").val();
  app.searchProperties.recordCount = $("#recordCount").val();
  app.search(app.searchProperties);
});
});