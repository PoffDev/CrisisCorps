function volCanvas() {

	// volunteer calculations
	// get number of commited volunteers from what's displayed on the dashboard	
	var committed_vols = document.getElementById('db-cv').childNodes[1].textContent;

	// total volunteer positions span text node
	var total_vol_positions = document.getElementById('total-vol-positions').childNodes[0].textContent;

	// calculate the % of volunteer posisitons filled
	var vol_positions_percentage = parseInt(committed_vols / total_vol_positions * 100);

	// progress bar element to adjust the width of based on percentage
	var vol_width = $('#vols-width');

	// pass the amount to the screen
	$('#vol-filled').html(vol_positions_percentage);

	// reset the width of that progress bar div
	vol_width.css('width', vol_positions_percentage + '%');

	progressBarSwitch(vol_positions_percentage, vol_width);


	// tasks calculations
	// get number of commited volunteers from what's displayed on the dashboard	
	var comp_tasks = document.getElementById('db-ct').childNodes[1].textContent;

	// get number of commited volunteers from what's displayed on the dashboard	
	var total_tasks = document.getElementById('db-tt').childNodes[1].textContent;

	// percentage of tasks
	var tasks_percentage = parseInt(comp_tasks / total_tasks * 100);

	var tasks_width = $('#tasks-width');

	$('#tasks-filled').html(tasks_percentage);

	// reset the width of that progress bar div
	tasks_width.css('width', tasks_percentage + '%');

	progressBarSwitch(tasks_percentage, tasks_width);

	// swithc for both progress bars
	function progressBarSwitch(percentage, progress_bar) {
		
		// switch to apply the appropriate bootstrap progress bar class
		switch(true) {

			case (percentage < 50):
				progress_bar.addClass('progress-bar-danger');
				break;

			case (percentage > 49 && percentage < 100):
				progress_bar.addClass('progress-bar-warning');
				break;

			case (percentage > 99):
				progress_bar.addClass('progress-bar-success');
				break;

			default:
				progress_bar.addClass('progress-bar-danger');

		} // end switch

	} // end progressBarSwitch()

	
	// canvas calculations
	// need the percentage to be dipslayed in relation to 2. Meaning the higher the percentage the closer the value needs to be to 2.
	var the_percentage = 2 * (committed_vols / total_vol_positions);
	
	// the number of volunteers needed. We'll pass this to the canvas text to display inside the circle
	var num_vols_needed = document.getElementById('vols-needed-hidden').childNodes[0].textContent;
	
	// set canvas variable to canvas element with id of my-canvas
	var canvas = document.getElementById('my-canvas');


	// canvas context declarations
	// context_base is the grayish circle below that provides reference to context that's colored blue so it's easy to see how much more there is to go to reach goal of 0 volunteers needed
	var context_base = canvas.getContext('2d');

	// context is the main circle colored in blue
	var context = canvas.getContext('2d');
	

	// establishing the circle size for both context_base and context. They need to match so they perfectly overlap
	context_base.clearRect(0, 0, canvas.width, canvas.height);
	context.clearRect(0, 0, canvas.width, canvas.height);


	// variable declarations for determining how much of the circle to fill in
	var x = 55; // x coordinate in relation to the canvas element
	var y = 67; // y coordinate in relation to the canvas element
	var r = 50; // radius of the circle
	var s = 0 // 1.5 * Math.PI;


	// context base
	// this one needs to be a full circle in a graying color
	context_base.beginPath();
	context_base.lineWidth = 10;
	context_base.arc(x, y, r, s, 2 * Math.PI, false);
	context_base.strokeStyle = "#c9c9cf"; // color of the circle
	context_base.stroke();

	context.beginPath();
	context.lineWidth = 10;
	context.arc(x, y, r, s, the_percentage * Math.PI, false);
	//context.closePath();
	context.strokeStyle = "#3a92cb"; // color of the circle
	context.fillStyle = "#5f6a7c"; // color of the displayed number
	context.stroke();
	context.font = "43px arial"; // font and size of the number
	context.textAlign="center";
	context.fillText(num_vols_needed, 56, 82); // 10 is the actual number displayed. 56 and 82 represent the positioning of the number on the circle
	
} // volCanvas()

// we need to pass the total_vol_positions from get method, so that is where this function call should go
volCanvas();


function totalVolsTasks(committed, totals, el) {

	// subtract the committed volunteers from all the members on first call and then completed tasks and all tasks on second call
	var subtract_amounts = parseInt(totals) - parseInt(committed)

	// update the text of each element passed
	el.innerHTML = subtract_amounts;

} // end totalVolsTasks()

function getCommittedUncommitted() {

	// get the text (numbers) from committed volunteers and total volunteers
	var num_commit = document.getElementById('db-cv').childNodes[1].textContent;
	var total_vols = document.getElementById('db-tv').childNodes[1].textContent;

	// get the h2 element that will be used to display the summed amount. We'll pass this in the function call
	var vol_el_to_pass = document.getElementById('db-uv').children[0];

	// call function to add and display the total on screen
	totalVolsTasks(num_commit, total_vols, vol_el_to_pass);

	// get the text (numbers) from completed tasks and total tasks
	var num_comp_tasks = document.getElementById('db-ct').childNodes[1].textContent;
	var total_tasks = document.getElementById('db-tt').childNodes[1].textContent;

	// get the h2 element that will be used to display the summed amount. We'll pass this in the function call
	var tasks_el_to_pass = document.getElementById('db-ot').children[0];

	// call function to add and display the total on screen
	totalVolsTasks(num_comp_tasks, total_tasks, tasks_el_to_pass);

} // end getCommittedUncommitted()

getCommittedUncommitted();