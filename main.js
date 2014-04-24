$(document).on('ready', function() {
	// click handler for submit
	$(document).on('click', '#submit', function(){

		// create variables
		var inputGame = $('.game-input').val();
		var inputReason = $('.reason-input').val();
		var makeGameList = $('<div class="game-list"></div>');
		var makeGameName = $('<div class="game-name"></div>');
		var makeReason   = $('<div class="game-reason"></div>');

		// create new nodes
		$('body').append(makeGameList);
		makeGameList.append(makeGameName);
		makeGameName.append(makeReason);

		// add the data from the inputs
		makeGameName.append(inputGame);
		makeReason.append(inputReason);

		//
	})
});