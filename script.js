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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game(){
    for (let i = 0; i <5; i++) {
    // using playRound, play a 5 round game
    // keep score
    // report a winner and loser at the end
    }
}