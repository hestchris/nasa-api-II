var express = require('express')
var app = express()
var request = require('request')

app.use(express.static('./public'))

app.get('/server', function(req, res){
  var nasaurl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.userdate}&end_date=${req.query.userdate}&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG`;
  request( nasaurl, function(err, response, body){
    console.log('fdsfds')
    res.send(body)
  })
})



//   request({
//     url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.userdate}&end_date=${req.query.userdate}&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG`,
//     function(err, res, body) {
//       if(err) {
//         console.log("There is an error")
//       }
//       else {
//         console.log('body:', body)
//         res.status(200).send(body);
//       }
//     }
//
//   })
// })

app.listen(8080, function(){
	console.log('This dude is working!')
})



//`https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.userdate}&end_date=${req.query.userdate}&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG`,
// var nasaurl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.userdate}&end_date=${req.query.userdate}&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG`;
// request(nasaurl, function(err, response, body))
