// admin nav toggle

function adminNavToggle() {
	
	// grab the ul element holding the admin navigation on left
	var nav_ul = document.getElementById('admin-nav-toggle');

	// toggle the hidden class. It's set to hidden from page load so the nav doesn't take up the entire screen when first loaded
	$(nav_ul).toggleClass('hidden');

} // end adminNavToggle()

// click event on the hamburger menu item that appears at 1024px screen size
$('#nav-toggle').on('click', function() {
	
	// call tha adminNavToggle function
	adminNavToggle();

}); // end nav-toggle click event
function volCanvas(total_vol_positions) {

	// get number of commited volunteers from what's displayed on the dashboard	
	var committed_vols = document.getElementById('db-cv').childNodes[1].textContent;

	// need the percentage to be dipslayed in relation to 2. Meaning the higher the percentage the closer the value needs to be to 2.
	var the_percentage = 2 * (committed_vols / total_vol_positions);
	
	// the number of volunteers needed. We'll pass this to the canvas text to display inside the circle
	var num_vols_needed = total_vol_positions - committed_vols;
	
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

// ************************* this needs to be removed once the get method runs
var total_vol_positions = 1260;

// we need to pass the total_vol_positions from get method, so that is where this function call should go
volCanvas(total_vol_positions);


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
function goodbyeAdmin() {
	console.log("goodbye admin");
}

goodbyeAdmin();
function helloAdmin() {
	console.log("hello admin");
}

helloAdmin();
