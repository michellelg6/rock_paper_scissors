/*

Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
*/

/*Initialized the scores*/
let playerScore = 0;
let computerScore = 0;


/*set variable to computer's selection*/
let computer = getComputerSelection();

/*got variable for player's selection*/
let player = "";

/*to store who the winner is*/
let winner = "";


function getComputerSelection() {
	let choiceNum = Math.round(Math.random() * 2);
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


function showData(){
	
document.getElementById("#playerScoreWindow").textContent(playerScore.toString());
document.getElementById("#computerScoreWindow").textContent(computerScore.toString());

document.getElementById("#winner").textContent(winner);
}

function rock() {
   document.getElementById("#playerOption").textContent("Rock");
   document.getElementById("#computerOption").textContent(getComputerSelection().toString());
	if (computer.toLowerCase() === "paper") {
		winner = "the computer";
		computerScore++;
		showData();
	} else if (computer.toLowerCase() === "scissors") {
		winner = "you!";
		playerScore++;
		showData();
	} else if (computer.toLowerCase() === "rock") {
		winner = "tied";
		playerScore++;
		computerScore++;
		showData();
	}
}


function paper() {
    /*Displaying the choice*/
       document.getElementById("#playerOption").textContent("Paper");
	   document.getElementById("#computerOption").textContent(getComputerSelection().toString());
	if (computer.toLowerCase() === "scissors") {
		winner = "the computer";
		computerScore++;
		showData();
	} else if (computer.toLowerCase() === "rock") {
		winner = "you!";
		playerScore++;
		showData();
	} else if (computer.toLowerCase() === "paper") {
		winner = "tied";
		playerScore++;
		computerScore++;
		showData();
	}

}

function scissors() {
    document.getElementById("#playerOption").innerText("Scissors");
	document.getElementById("#computerOption").innerText(getComputerSelection().toString());
	if (computer.toLowerCase() === "paper") {
		winner = "you!";
		playerScore++;
		showData();
	} else if (computer.toLowerCase() === "rock") {
		winner = "the computer";
		computerScore++;
		showData();
	} else if (computer.toLowerCase() === "scissors") {
		winner = "tied";
		computerScore++;
		playerScore++;
		showData();
	}
}


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', rock);

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', paper);

const scissorsButton = document.querySelector('#rock');
scissorsButton.addEventListener('click', scissors);
