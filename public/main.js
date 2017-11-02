$(document).ready(function(){
  var newdata;
  let userdate = $('#userdate').val()
  $('#search').on('submit', function(event){
    event.preventDefault()
      var userdate = $('#userdate').val()
      $.get('/server?userdate=' + userdate, function(res){
        res = JSON.parse(res)
        console.log(res)
          if(res.near_earth_objects.is_potentially_hazardous_asteroid === true) {
            console.log(res.near_earth_objects.name)
          }
        })

      })
   })
        // for(let asteroid of res.near_earth_objects['userdate']) {
        //   if(asteroid.is_potentially_hazardous_asteroid === true) {
      	// 		var asteroidname = asteroid.name;
      	// 		$('.2017-10-18 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
      	// 		if(asteroid.estimated_diameter.feet) {
      	// 			var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
      	// 			$('.2017-10-18 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
      	// 		}
      	// 		if(asteroid.close_approach_data['0'].relative_velocity) {
      	// 			var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
      	// 			$('.2017-10-18 .velocity').append(`<div class="velocity">${velocity}</div>`);
      	// 		}
      	// 		if(asteroid.close_approach_data['0'].miss_distance) {
      	// 			var distance = asteroid.close_approach_data['0'].miss_distance.miles;
      	// 			$('.2017-10-18 .distance').append(`<div class="distance">${distance}</div>`)
      	// 		}
      	// 	}
        // }
        //apend new data to DOM




// body= JSON.parse(body);
