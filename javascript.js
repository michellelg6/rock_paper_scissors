let playerScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay(){
	
	let choiceNum = Math.floor(Math.random() * 2);
	     let computerSelection;
	     if (choiceNum === 0) {
		 computerSelection = "rock";
	     }

	     if (choiceNum === 1) {
		 computerSelection = "scissors";
	     }

	     if (choiceNum === 2) {
		 computerSelection = "paper";
	     }	
		 
		 return computerSelection;
	
}

function playRound(playerSelection, computerSelection)
{

let result;


if(playerSelection === computerSelection){
		result = "You chose: " + playerSelection + " and the computer chose " + computerSelection + ". You tied!";	
		return result;
		playerScore++;
		computerScore++;
		
}	

else if(playerSelection === "rock") {
   
		if (computerSelection === "paper") {
			computerScore++;
			result = "You chose: " + playerSelection + " and the computer chose " + computerSelection + ". Paper covers rock! The computer scores!!";
			return result;
			
		} else if ( computerSelection === "scissors") {
			playerScore++;
			result = "You chose: " + playerSelection + " and the computer chose " + computerSelection + ". Rock breaks scissors! You score!";	
			return result;
			
         } 	
}

else if(playerSelection === "paper") {
   
		if ( computerSelection === "scissors") {
			computerScore++;
			result =  "You chose: " + playerSelection + " and the computer chose " + computerSelection + "Scissors cuts paper. The computer scores!";
			return result;
		} else if ( computerSelection === "rock") {
			playerScore++;
			result = "You chose: " + playerSelection + " and the computer chose " + computerSelection + ". Paper covers rock.You score!";
			return result;
         } 	
}

else if(playerSelection === "scissors") {
   
		if ( computerSelection === "rock") {
			computerScore++;
			result = "You chose: " + playerSelection + " and the computer chose " + computerSelection + ". Rock breaks scissors. The computer scores!!";
			return result;
		} else if ( computerSelection === "paper") {
			playerScore++;
			result = "You chose: " + playerSelection + " and the computer chose " + computerSelection + ". Scissors cuts paper. You score!";
			return result;
         } 		 
}    
}

function displayScoreTableRow(){
	let roundRow = document.createElement('tr');
	let roundCell = document.createElement('td');
	let playerScoreCell = document.createElement('td');
	let compScoreCell = document.createElement('td');
	
	roundCell.textContent = round;
	playerScoreCell.textContent = playerScore;
	compScoreCell.textContent = computerScore;
	
	let tbl = document.querySelector('table');
	tbl.appendChild(roundRow);
	roundRow.appendChild(roundCell);
	roundRow.appendChild(playerScoreCell);
	roundRow.appendChild(compScoreCell);
}

function winnerScreen(){
	let winner = "";
	if (playerScore > computerScore){
		winner = "you!!! Congratulations, you won!";
	}
	
	else if (computerScore > playerScore){
	   winner = "the computer! Sorry, you lose!";	
	}
	
	else if (computerScore === playerScore){
		winner = "Nobody! It's a tie!";
	}
	
	let finalResults = document.getElementById("results");
	let playersChoice = document.getElementById("playerSelection");
    let displayWinner = document.getElementById("winner");
	finalResults.removeChild(document.getElementById("showResults"));
	playersChoice.removeChild(document.getElementById("showPlayerSelection"));
	displayWinner.textContent = 'And the winner is....' + winner;
	displayWinner.removeChild(document.getElementById("roundNum"));
}


/*for(round = 1; round <= 5; round++){*/

//variable for all buttons
const buttons = document.querySelectorAll('.selection');
/*const rounds = document.querySelectorAll('.round');*/

/*do{*/

	buttons.forEach((button) => {
	
	let computerSelection = computerPlay();
    let playerSelection = button.id;
	button.addEventListener("click", () => { 
	
	if(round <= 5){
		document.getElementById("displaySelections").textContent = playRound(playerSelection, computerSelection); 
		document.getElementById('roundNum').textContent = "Round " + round.toString();
		document.getElementById("announcePlayerScore").textContent = "The player's score is :" + playerScore.toString();
		document.getElementById("announceComputerScore").textContent = "The computer's score is :" + computerScore.toString();
		displayScoreTableRow();
	}
	else{
		winnerScreen();
    }
	
    	
	round++;
		 
  });
});
/*} while(round <= 5);*/



/*console.log("*The player's score finale is: " + playerScore);
console.log("*The computer's score finale is: " + computerScore);

if(playerScore > computerScore){
	console.log("You won!!!");
}
else if(computerScore > playerScore){
console.log("The computer won!");}

else if (playerScore === computerScore){
	console.log("You tied!");
}
/*}*/

/*game();*/
