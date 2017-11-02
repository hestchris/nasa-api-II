$(document).ready(function(){

  var newdata;

  $('#search').on('submit', function(event){
    event.preventDefault()
      var userdate = $('#userdate').val()
      $.get('/server', {userdate: userdate}, function(res){
        newdata = res
        //apend new data to DOM
      })
    }
  })
})

// $.get('/api?start_date=12-20-12 & end_date=12-22-12')    --client-side
// fn(body, status, res){}
// index.html- has a form that user fills out a day
// main.js - gets the form request and sends a get request it to server.js
// server.js -
// $.get('/api?start_date=${userinput}')
//
