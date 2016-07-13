$(document).ready(function(){

	console.log('working');

	var NPapi = "https://projects.propublica.org/nonprofits/api/v1";

	$.ajax({
		url: api,
		method: 'GET'
	})
		.done(function(nonprofits){
			console.log(nonprofits);
		})

	
})
