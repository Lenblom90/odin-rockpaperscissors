function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    resultDisplay.textContent = "Computer choice: " + choices[randomNumber] + ". ";
    return choices[randomNumber];
}

function playRound(playerChoice, computerSelection) {
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

const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector(".results");
buttons.forEach(btn => btn.addEventListener('click', () => {
    let result = playRound(btn.textContent, getComputerChoice())
    resultDisplay.textContent = resultDisplay.textContent + result;
}));

/*
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
*/