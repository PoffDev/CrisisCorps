function locationCanvases() {
		
		// var complete_location_date_value = $("#complete-location-date-" + theIdArray[l]).html();
		// var complete_location_date = new Date(complete_location_date_value);
		// var current_date = new Date();
	
		// /* Subtract the completion date from current date */
		// var ms = complete_location_date - current_date;
	
		//  // Convert into days from milliseconds 
		// var x = ms / 1000;
		// var seconds = x % 60;
		// x /= 60;
		// var minutes = x % 60;
		// x /= 60;
		// var hours = x % 24;
		// x /= 24;
		// var days = Math.ceil(x);
		// if (days < 0) {
		// 	days = 0;
		// };
	
		var the_percentage = 2 * ((100 - 32) / 100);
		
		// if (days > 100) {
		// 	the_percentage = 0.01;
		// };
		
		var canvas = document.getElementById('my-canvas');
		var context_base = canvas.getContext('2d');
		var context = canvas.getContext('2d');
		
		context_base.clearRect(0, 0, canvas.width, canvas.height);
		context.clearRect(0, 0, canvas.width, canvas.height);
	
		var x = 55;
		var y = 67;
		var r = 50;
		var s = 0 // 1.5 * Math.PI;
	
		context_base.beginPath();
		context_base.lineWidth = 5;
		context_base.arc(x, y, r, s, 2 * Math.PI, false);
		context_base.strokeStyle = "#c9c9cf";
		context_base.stroke();
	
		context.beginPath();
		context.lineWidth = 5;
		context.arc(x, y, r, s, the_percentage * Math.PI, false);
		//context.closePath();
		context.strokeStyle = "#3a92cb";
		context.fillStyle = "#5f6a7c";
		context.stroke();
		context.font = "43px arial";
		context.textAlign="center";
		context.fillText(20, 56, 82);
	
};

locationCanvases();
function goodbyeAdmin() {
	console.log("goodbye admin");
}

goodbyeAdmin();
function helloAdmin() {
	console.log("hello admin");
}

helloAdmin();
