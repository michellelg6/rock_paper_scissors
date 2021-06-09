let playerScore = 0;
let computerScore = 0;

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
			results =  "You chose: " + playerSelection + " and the computer chose " + computerSelection + "<h3>Scissors cuts paper. The computer scores!";
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

/*function game(){*/
var round;

/*for(round = 1; round <= 5; round++){*/

//variable for all buttons
const buttons = document.querySelectorAll('.selection');


buttons.forEach((button) => {
	let computerSelection = computerPlay();
    let playerSelection = button.id;
	button.addEventListener("click", () => { 
	console.log(playRound(playerSelection, computerSelection)); 
	console.log("The player's score is :" + playerScore);
    console.log("The computer's score is :" + computerScore);
  });
});


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