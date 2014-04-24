$(document).on('ready', function() {
	// create variables
	// click handler for submit
	$(document).on('click', '#submit', function(){
		// add the data from the inputs
		var inputGame = $('.game-input').val();
		var inputReason = $('.reason-input').val();
		console.log(inputReason);
		console.log(inputGame);
		$('.reason-input').val();
	})
});