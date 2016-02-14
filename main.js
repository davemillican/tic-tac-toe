

var players = [];

var prompt = require ('prompt-sync').prompt;

var x, y;
var currentName, nextPlayer;

var gameBoard = [ [' ',' ',' '], [' ',' ',' '], [' ',' ',' '] ];


do {

	//  First Enter the Players' names.
	console.log ("what's the first player's name?");
	players[0] = prompt();

	console.log ("what's the second player's name?");
	players[1] = prompt();



		//  Display the board
	console.log("    1   2   3  ");
	console.log("  ~~~~~~~~~~~~~");
	console.log("1 |   |   |   |");
	console.log("  ~~~~~~~~~~~~~");
	console.log("2 |   |   |   |");
	console.log("  ~~~~~~~~~~~~~");
	console.log("3 |   |   |   |");
	console.log("  ~~~~~~~~~~~~~");


		// Init the game play 
		currentPlayer = "O";
		numMoves = 0;
		game_done = false;

		for (x = 0;x < 3; x++)
			for (y = 0; y < 3; y++)
				gameBoard[x][y] = " ";

		do {
			// Swap the player
			numMoves++;

			if ( currentPlayer === "O") {
				currentPlayer = "X";
				currentName = players[0];
				nextPlayer = players[1];
			}
			else {	
				currentPlayer = "O";
				currentName = players[1];
				nextPlayer = players[0];
			}

			forfeit = false;

			//  Get a Valid move from the next player.
			do {
				//  Ask the player for the next move
				console.log (currentName + ", please enter the next move.")
				inputStr = prompt();

				if (inputStr === "forfeit")
				{
					validMove = true;
					forfeit = true;
					game_done = true;

					console.log (currentName + " forfeits: " + nextPlayer + " wins.");

				} else {
					//  Validate Move
					nextMove = inputStr.split(" ");

					validMove = false;

					if  ( 	(nextMove.length === 2) 
						&&  (isNaN(nextMove[0]) === false )
						&&	(isNaN(nextMove[1]) === false ) )
					{
						x = parseInt(nextMove[0]);
						y = parseInt(nextMove[1]);

						// We need to convert the user Numbering of 1-3 to the 
						//  internal numbering of 0-2.
						x--;
						y--;

						if ( (x >= 0) && (y  >= 0) && (x < 3) && (y < 3) )
						   {
						   		if (gameBoard[x][y] === " " ) 
						   		{
						   			validMove = true;

						   		}
						   		else 
						   		{
						   			console.log ("Invalid input: that space is already taken.");
						   		
						   		}

						   }
						   else
						   {
						   		console.log ("Invalid input: those coordinates are outside the playable area.");
						   }

					} else {
						console.log ("Invalid input: you must enter the x and y coordinates separated by spaces.");					
					} 
				}	
			} while ( validMove === false );
			 
			if (forfeit === false)
			{	

				gameBoard[x][y] = currentPlayer;

				//  The Display the board
				console.log("    1   2   3  ");
				console.log("  ~~~~~~~~~~~~~");
				console.log("1 | " + gameBoard[0][0] + " | " + gameBoard[1][0] + " | " + gameBoard[2][0] + " |");
				console.log("  ~~~~~~~~~~~~~");
				console.log("2 | " + gameBoard[0][1] + " | " + gameBoard[1][1] + " | " + gameBoard[2][1] + " |");
				console.log("  ~~~~~~~~~~~~~");
				console.log("3 | " + gameBoard[0][2] + " | " + gameBoard[1][2] + " | " + gameBoard[2][2] + " |");
				console.log("  ~~~~~~~~~~~~~");

				console.log (" ");
				console.log (" ");
				console.log (" ");

			
				// check for winner
				if  ((     ( gameBoard[x][0] === gameBoard[x][1]) && ( gameBoard[x][1] === gameBoard[x][2]) )
					||  (  ( gameBoard[0][y] === gameBoard[1][y]) && ( gameBoard[1][y] === gameBoard[2][y]) )
					//Following is a number of Checks for Diagonal Win
					||  ((   gameBoard[0][0] === gameBoard[1][1])  
						&& ( gameBoard[1][1] === gameBoard[2][2])
						&& ( gameBoard[1][1] !== " ") )
					||  (( gameBoard[0][2] === gameBoard[1][1]) 
						&& ( gameBoard[1][1] === gameBoard[2][0])
						&& ( gameBoard[1][1] !== " ") ) )
				{ 
					//  We have a winner.
					console.log (currentName + " wins!!!!!!!!");
					console.log ("Congratulations!!!");
					console.log ("");
					console.log ("");
					console.log ("");
					console.log ("");

					game_done = true;

				}
				else if (numMoves === 9)
				{
					console.log("It's a Tie!!!")
					game_done = true;
				}
			}

		} while ( game_done === false );


	// while the players want to play the game
	console.log("Would you like to play another game? Yes/No");
	answer = prompt();	

} while ( answer === "yes");

console.log ("Thank you for playing Tic Tac Toe.")

