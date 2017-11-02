var express = require('express')

var app = express()

app.use(express.static('./public'))

app.get('/', function(request, response){
	response.sendFile('./public/html/index.html', {root: './'})
})

app.listen(8080, function(){
	console.log('This dude is working!')
})
// https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG


res.status(200).send
