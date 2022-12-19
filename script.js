function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    console.log("Computer choice: " + choices[randomNumber])
    return choices[randomNumber];
    // random return of "Rock", "Paper" or "Scissors"
    // Log the choice to the console
}

function playRound(playerSelection, computerSelection) {
    // make playerSelection case insensitive
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    // Return result
    let winMessage = `You Win! ${playerChoice} Beats ${computerSelection}`;
    let loseMessage =  `You Lose! ${computerSelection} Beats ${playerChoice}`;
    let tieMessage = "It's a Tie!";
    
    if (playerChoice == computerSelection){        
        return tieMessage;
    }
    else if (playerChoice == "Rock"){
        return computerSelection == "Paper" ? loseMessage : winMessage
    } else if (playerChoice == "Paper") {
        return computerSelection == "Scissors" ? loseMessage : winMessage
    } else if (playerChoice == "Scissors") {
        return computerSelection == "Rock" ? loseMessage : winMessage
    } else {
        return "Invalid choice, please try again";
    }
}

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    // using playRound, play a 5 round game
    for (let i = 0; i <5; i++) {
        let selection = prompt("Rock, Paper, Scissors! Make your choice: ")
        let result = playRound(selection, getComputerChoice())
        console.log(result);
        while(result.includes("Invalid")){
            selection = prompt("Rock, Paper, Scissors! Make your choice: ")
            result = playRound(selection, getComputerChoice())
        }
        // keep score
        if(result.includes('Win')){
            playerScore++;
        }
        if(result.includes('Lose')){
            computerScore++;
        }
    }
    // report a winner and loser at the end
    let result = `The game is finished. Final score: \n You: ${playerScore} \n Computer: ${computerScore} \n`
    if(playerScore == computerScore){
        console.log(result.concat("It's a Tie"));
    } else if (playerScore < computerScore){
        console.log(result.concat("You Lose."))
    } else {
        console.log(result.concat("You Win!"))
    }
    
}

game();