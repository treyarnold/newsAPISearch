<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="./assets/css/style.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron" id="header">
    <span><i class="far fa-newspaper mr-3"></i>Your News Search</span>
  </div>

  <div class="container">
    <div class="card">
      <h5 class="card-header"><i class="fas fa-newspaper mr-2"></i>Search Parameters</h5>
      <div class="card-body">
        <form>
          <p class="card-text">Search Term:</p>
          <input type="text" class="form-control mb-3" name="searchTerm" id="searchTerm">
          
          <p class="card-text">Number of Records to Retrieve:</p>
          <select class="custom-select mb-3" id="recordCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="5">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p class="card-text">Start Year (optional):</p>
          <input type="text" class="form-control mb-3" name="searchTerm" id="searchTerm">
          <p class="card-text">End Year (optional):</p>
          <input type="text" class="form-control mb-3" name="searchTerm" id="searchTerm">
          <div>
            <button type="submit" id="search"><i class="fas fa-search mr-2"></i>Search</button>
            <button id="clear" class="mr-3"><i class="fas fa-trash-alt mr-2"></i>Clear Results</button>
          </div>

        </form>
      </div>
    </div>

    <div class="card mt-4">
        <div class="card-header"><i class="fas fa-table mr-2"></i>Top Articles</div>
        <div class="card-body" id="articleDiv">
          
        </div>
      </div>
  </div>
  
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" 
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" 
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="./assets/js/nyt.js"></script>
</body>
</html>