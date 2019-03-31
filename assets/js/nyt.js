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

  parseTimeStamp: function (timeStamp) {
    let year = timeStamp.slice(0, 4);
    console.log(timeStamp);
    let month = timeStamp.slice(5, 7);
    let day = timeStamp.slice(8, 10);
    console.log(month);
    console.log(day);
    let parsedDate = `${month}/${day}/${year}`;
    return parsedDate
  },

  showArticles: function (response) {
    $("#articleDiv").empty();
    let articleCount = this.searchProperties.recordCount;
    console.log(response.articles[1]);
    for (let i = 0; i < articleCount; i++) {
      let article = response.articles[i];
      let dateTime = this.parseTimeStamp(article.publishedAt);
      let display =   
        `<div>
          <a href="${article.url}" target="_blank"><h2>${article.title}</h2></a>
          <p><em>${article.source.name}</em><span class="ml-3">${dateTime}</span></p>
          <p>${article.description}</p>
        </div>`
      $("#articleDiv").prepend(display);
    }
  }
}

$(document).ready(function(){
  $("#search").on("click", function (event){
    event.preventDefault();
    app.searchProperties.searchTerm = $("#searchTerm").val();
    app.searchProperties.recordCount = $("#recordCount").val();
    app.search(app.searchProperties.searchTerm);
  });
});