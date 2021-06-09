/*

Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
*/


/*Initialized the scores*/
let playerScore = 0;
let computerScore = 0;
let roundNum = 0;


/*set variable to computer's selection*/
let computer = getComputerSelection();


/*to store who the winner is*/
let winner = "";


function getComputerSelection() {
	let choiceNum = Math.floor(Math.random() * 2);
	let computerInput;
	if (choiceNum === 0) {
		computerInput = "Rock";
	}

	if (choiceNum === 1) {
		computerInput = "Scissors";
	}

	if (choiceNum === 2) {
		computerInput = "Paper";
	}

	return computerInput;
}

function getWinner(winner){
  if (computerScore === playerScore){
	  winner = "tied";
  }
  
  else if (computerScore > playerScore){
	  winner = "the computer"
  }
  
  else if (playerScore > computerScore){
	  winner = "you"
  }
  
  return winner;
}

function winnerScreen(){
	
let choices = document.getElementById("choices");
let resultingSelections = document.getElementById("resultingSelections");
theRound = document.getElementById("roundNum");
	
document.getElementById("winner").innerHTML = "<h2>And the winner is...... " + getWinner(winner) + "!</h2>";
document.getElementById("playerSelection").removeChild(choices);
document.getElementById("results").removeChild(resultingSelections);
document.getElementById("myBody").removeChild(theRound);

}

function showData() {

	document.getElementById("playerScoreWindow").innerHTML = "<h3>Player Score: " + playerScore.toString() + "</h3>";
	document.getElementById("computerScoreWindow").innerHTML = "<h3>Computer Score: " + computerScore.toString() + "</h3>";


}

function rock() {
    
	if (roundNum < 5) {
		document.getElementById("playerOption").innerHTML = "<h3>You chose Rock</h3>";
		document.getElementById("computerOption").innerHTML = "<h3>The computer chose " + getComputerSelection() + "</h3>";



		if (computer.toLowerCase() === "paper") {
			computerScore++;
			showData();
		} else if (computer.toLowerCase() === "scissors") {
			playerScore++;
			showData();
		} else if (computer.toLowerCase() === "rock") {
			playerScore++;
			computerScore++;
			showData();
		}

        roundNum++;
		document.getElementById('roundNum').innerHTML = '<h3>Round ' + roundNum + '</h3>';
		
	} else {
		winnerScreen();
	}
}


function paper() {

	if (roundNum < 5) {
		/*Displaying the choice*/
		document.getElementById("playerOption").innerHTML = "<h3>You chose paper</h3>";
		document.getElementById("computerOption").innerHTML = "<h3>The computer chose: " + getComputerSelection().toString() + "</h3>";
		if (computer.toLowerCase() === "scissors") {
			computerScore++;
			showData();
		} else if (computer.toLowerCase() === "rock") {
			playerScore++;
			showData();
		} else if (computer.toLowerCase() === "paper") {
			playerScore++;
			computerScore++;
			showData();
		}
        roundNum++;
		document.getElementById('roundNum').innerHTML = '<h3>Round ' + roundNum + '</h3>';
		
	} else {
		winnerScreen();
		
	}

}

function scissors() {
     
	if (roundNum < 5) {

		document.getElementById("playerOption").innerHTML = "<h3>You chose Scissors!</h3>";
		document.getElementById("computerOption").innerHTML = "<h3>The computer chose: " + getComputerSelection().toString() + "</h3>";
		if (computer.toLowerCase() === "paper") {
			playerScore++;
			showData();
		} else if (computer.toLowerCase() === "rock") {
			computerScore++;
			showData();
		} else if (computer.toLowerCase() === "scissors") {
			computerScore++;
			playerScore++;
			showData();
		}
         roundNum++;
		
		document.getElementById('roundNum').innerHTML = '<h3>Round ' + roundNum + '</h3>';
	} else {

		winnerScreen();
		
	}

}


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', rock);

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', paper);

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', scissors);