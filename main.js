

var players = [];

var prompt = require ('prompt-sync').prompt;

var x, y;

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
			( currentPlayer === "O") ? currentPlayer = "X" : currentPlayer = "O";

			//  Get a Valid move from the next player.
			do {
				//  Ask the player for the next move
				console.log (" Please enter the next move.")
				inputStr = prompt();

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
					   			// Error Msg
					   			console.log ("error 1");
					   			console.log (gameBoard);
					   		}

					   }
					   else
					   {
					   			console.log ("error 2");
					   		// Error msg
					   }



				} else {
					console.log ("error 3");
					// error message

				} 
			} while ( validMove === false );


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

			console.log (gameBoard);


			

		
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
				console.log ("Player wins");
				game_done = true;

			}
			else if (numMoves === 9)
			{
				console.log("It's a Tie!!!")
				game_done = true;
			}

		} while ( game_done === false );


// while the players want to play the game
console.log("Would you like to play another game? Yes/No");
answer = prompt();	
} while ( answer === "yes");

console.log ("Thank you for playing Tic Tac Toe.")

