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
		makeGameList.append(makeReason);

		// add the data from the inputs
		makeGameName.append(inputGame);
		makeReason.append(inputReason);

	});
	// when you click on a game title, hide all other games
	// delegated event handler
	$(document).on('click', '.game-name', function(){
		var currentGameTitle = $(this).text();
		// logs the text from the .game-name element that you click on
		console.log(currentGameTitle);
		var filterGames = $('.game-list').toArray().filter(function(item){
			var checkGame = $(item).find('.game-name').text();
			// logs ALL .game-name values 
			console.log(checkGame);
			if(currentGameTitle !== checkGame) {
				return true;
			}
				return false;
		});
		console.log(filterGames);

		// loop through the full array of games (all items in .game-list)
		for(var i=0;i<filterGames.length;i++){
			// logs all games that DON't have the same title as the one clicked on
			console.log( $(filterGames[i]) );
			$(filterGames[i]).hide();
		}
	});
});