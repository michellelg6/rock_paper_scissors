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
let player;

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


functionplayRound(playerSelection, computerSelection){
	
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

const btn = document.querySelectorAll(".btn")
btn.forEach(b => {
  b.addEventListener('click', () => {
    playRound(b.getAttribute("id"), chooseRandom())
  })
});


/*Displaying the choice*/
document.getElementById("#playerOption").textContent(player);
document.getElementById("#computerOption").textContent(computer);

document.getElementById("#playerScoreWindow").textContent(playerScore.toString());
document.getElementById("#computerScoreWindow").textContent(computerScore.toString());

document.getElementById("#winner").textContent(winner);