$(document).ready(function(){
  var newdata;
  let userdate = $('#userdate').val()
  $('#search').on('submit', function(event){
    event.preventDefault()
      var userdate = $('#userdate').val()
      $.get('/server?userdate=' + userdate, function(res){
        res = JSON.parse(res)
        console.log(res);
        newdata = res
        
        //apend new data to DOM
      })
   })
})



// body= JSON.parse(body);
