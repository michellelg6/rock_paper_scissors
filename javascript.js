/*

Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
*/

let playerScore = 0;
let computerScore = 0;
let computer = getComputerSelection();
let player;
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


function rock() {
   player = "rock"
	if (computer.toLowerCase() === "paper") {
		winner = "the computer";
		computerScore++;
	} else if (computer.toLowerCase() === "scissors") {
		winner = "you!";
		playerScore++;
	} else if (computer.toLowerCase() === "rock") {
		winner = "tied";
		playerScore++;
		computerScore++;
	}
}

function paper() {
    player = "paper"
	if (computer.toLowerCase() === "scissors") {
		winner = "the computer";
		computerScore++;
	} else if (computer.toLowerCase() === "rock") {
		winner = "you!";
		playerScore++;
	} else if (computer.toLowerCase() === "paper") {
		winner = "tied";
		playerScore++;
		computerScore++;
	}

}

function scissors() {
    player = "scissors"
	if (computer.toLowerCase() === "paper") {
		winner = "you!";
		playerScore++;
	} else if (computer.toLowerCase() === "rock") {
		winner = "the computer";
		computerScore++;
	} else if (computer.toLowerCase() === "scissors") {
		winner = "tied";
		computerScore++;
		playerScore++;
	}
}

document.getElementById("#rock").addEventListener('click', rock);

document.getElementById("#paper").addEventListener('click', paper);

document.getElementById("#scissors").addEventListener('click', scissors);

document.getElementById("#playerOption").textContent(player);
document.getElementById("#computerOption").textContent(computer);

document.getElementById("#playerScoreWindow").textContent(playerScore.toString());
document.getElementById("#computerScoreWindow").textContent(computerScore.toString());

document.getElementById("#winner").textContent(winner);