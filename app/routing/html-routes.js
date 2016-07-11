var path = require('path');

module.exports = function (app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/tables', function(req, res){
		console.log(index_plus(tdata));
		tdata.forEach(function(tdata, index, array){ //for each item in the tables array you are added a number property
			tdata.number = index + 1;
		});

		wdata.forEach(function(wdata, index, array){
			wdata.number = index + 1;
		});
		res.render('tables', {table_data: tdata, waiting_data: wdata});
	});

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		// res.sendFile(path.join(__dirname + '/../public/home.html'));
		res.render('home');
	});
	
}