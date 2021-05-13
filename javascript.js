let playerScore = 0;
let computerScore = 0;

function getComputerSelection(){
		    let choiceNum = Math.round(Math.random() * 2)
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

 function getPlayerSelection(){
	     let input = prompt ("What is your choice? Rock, paper, or scissors? Input is case insensitive");
		 input.toLowerCase()
		
		  if (input != "rock" || input != "paper" || input != "scissors") {
		    let input = prompt ("Sorry! Bad input! Let's try again. What is your choice? Rock, paper, or scissors?");
		    return input;
		}
		else{
		return input;
		}
}
		

function game(){

	let computer = getComputerSelection();
    let player = getPlayerSelection();
    let winner;
	
	
	 if (player.toLowerCase() === "rock"){
		     if (computer.toLowerCase() === "paper"){
			    winner = "the computer";
			 }
			 
			 else if (computer.toLowerCase() === "scissors"){
			      winner = "you!";
			 }
			 
			  else if (computer.toLowerCase() === "rock"){
			      winner = "tied";
			 }
		  }/* end of if */
		  
		  if (player.toLowerCase() === "scissors"){
		      if (computer.toLowerCase() === "paper"){
			    winner = "you!";
			  }
			 
			 else if (computer.toLowerCase() === "rock"){
			      winner = "the computer";
			  }
			  
			  else if (computer.toLowerCase() === "scissors"){
			      winner = "tied";
			 }
		  } /* end of scissors if */
		  
		  if (player.toLowerCase() === "paper"){
		     if (computer.toLowerCase() === "scissors"){
			    winner = "the computer";
			  }
			 
			 else if (computer.toLowerCase() === "rock"){
			      winner = "you!";
			  }
			  
			  else if (computer.toLowerCase() === "paper"){
			      winner = "tied";
			  }
		    } /* end of paper if */
			
			
			if(winner != "tied"){
			  alert("You chose:" + player.toLowerCase() + ". The computer chose: " + computer + ". The winner is: " + winner + "!" );
			  
			   if (winner === "the computer"){
				   computerScore++;
				   alert("The computer gets a point");
			   }
			   else if (winner === "you!"){
				   playerScore++;
				   alert("You get a point!");
			   }
			}
			
			else{
			  alert("You chose: " + player + " The computer chose:  " + computer.toLowerCase() + ". You tied! You both get a point!"); 

	
			  playerScore++;
			  computerScore++;
			}
			
	
            }/*end of function*/
           for (let g = 0; g < 5; g++){
	          game();
           }
		   
		   alert("Player points: " + playerScore + "Computer points: " + computerScore);
           if(playerScore > computerScore){
			   alert("You win!!!");
		   }
		   else if (computerScore > playerScore){
			   alert("The computer wins!");
		   }
		   
		   else{
			   alert("You tied!");
		   }
