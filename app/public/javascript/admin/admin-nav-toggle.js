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