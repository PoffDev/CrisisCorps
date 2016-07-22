/* Volunteer for Task */
$('#vol-for-task').on('click', function() {

	var vol_id = parseInt($(this).data('let'));

	var task_id = parseInt($(this).data('task'));

	var task_and_vol = {
		taskId: task_id,
		volId: vol_id
	}

	console.log(task_and_vol);

	//push those values to database
	$.post('/volForTask', task_and_vol, function() {
		console.log(task_and_vol);
	});

});

/* Task Complete */
$('#task-complete').on('click', function() {
	
	var vol_id = parseInt($(this).data('let'));

	var task_id = '0';

	var task_and_vol = {
		taskId: task_id,
		volId: vol_id
	}

	console.log(task_and_vol);

	//push those values to database
	$.post('/membTaskUpdate', task_and_vol, function() {
		console.log(task_and_vol);
	});

});