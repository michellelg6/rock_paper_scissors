/*

Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
*/

let playerScore = 0;
let computerScore = 0;
let computer = getComputerSelection();
let winner = "";


function getComputerSelection(){
		    let choiceNum = Math.round(Math.random() * 2);
			let computerInput;
			if (choiceNum === 0){
			 computerInput = "Rock";
			}
			
			if (choiceNum === 1){
			 computerInput = "Scissors";
			}
			
			if (choiceNum === 2){
			 computerInput = "Paper";
			}
			
			return computerInput;
}


function rock(){

	 if (computer.toLowerCase() === "paper"){
			 winner = "the computer";
			 computerScore++;
	 }
			 
	 else if (computer.toLowerCase() === "scissors"){
		winner = "you!";
		playerScore++;
	  }
			 
	 else if (computer.toLowerCase() === "rock"){
			      winner = "tied";
				  playerScore++;
				  computerScore++;
	 }
   }
   
   function paper(){
	  
        if (computer.toLowerCase() === "scissors"){
			    winner = "the computer";
				computerScore++;
	    }
			 
	    else if (computer.toLowerCase() === "rock"){
			      winner = "you!";
				  playerScore++:
			  }
			  
	    else if (computer.toLowerCase() === "paper"){
			      winner = "tied";
				  playerScore++;
				  computerScore++;
		}	  
	   
   }
   
    function scissors(){
	  
     if (computer.toLowerCase() === "paper"){
			    winner = "you!";
				playerScore++;
			  }
			 
	 else if (computer.toLowerCase() === "rock"){
			      winner = "the computer";
				  computerScore++;
	 }
			  
	 else if (computer.toLowerCase() === "scissors"){
			  winner = "tied";
			  computerScore++;
			  playerScore++;
	  }	    
    }
   
const rockPic = document.createElement('div');
const paperPic = document.createElement('div');
const scissorsPic = document.createElement('div');
const playerScoreWindow = document.createElement('div');
const computerScoreWindow = document.createElement('div');

rockPic.style.width = "500px";
rockPic.style.height = "500px";
paperPic.style.width = "500px"
paperPic.style.height = "500px;";
scissorsPic.style.width = "500px"
scissorsPic.style.height = "500px"

rockPic.style.backgroundImage = "url('rock.jpg')";
rockPic.style.backgroundRepeat = "no-repeat";

paperPic.style.backgroundImage = "url('paper.jpg')";
paperPic.style.backgroundRepeat = "no-repeat";

scissorsPic.style.backgroundImage = "url('scissors.jpg')";
scissorsPic.style.backgroundRepeat = "no-repeat";

document.body.appendChild(rockPic);
document.body.appendChild(paperPic);
document.body.appendChild(scissorsPic);

rockPic.addEventListener('click', rock);

paperPic.addEventListener('click', paper);

scissorsPic.addEventListener('click', scissors);

const playerScoreWindow.innerText = playerScore;
const computerScoreWindow.innerText = computerScore;
	
document.body.appendChild(playerScoreWindow);
document.body.appendChild(computerScoreWindow);

	 
		  
		  
		  
		 
		  
		 