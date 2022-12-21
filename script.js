function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    resultDisplay.textContent = "Computer choice: " + choices[randomNumber] + ". ";
    return choices[randomNumber];
}

function playRound(playerChoice, computerSelection) {
    const tieScore = [0,0,"It's a Tie!"];
    const loseScore = [0,1,`You Lose! ${computerSelection} Beats ${playerChoice}`];
    const winScore = [1,0,`You Win! ${playerChoice} Beats ${computerSelection}`];

    if (playerChoice == computerSelection){        
        return tieScore;
    }
    else if (playerChoice == "Rock"){
        return computerSelection == "Paper" ? loseScore : winScore
    } else if (playerChoice == "Paper") {
        return computerSelection == "Scissors" ? loseScore : winScore
    } else if (playerChoice == "Scissors") {
        return computerSelection == "Rock" ? loseScore : winScore
    }
}

function rps(e){
    buttonChoice = e.target.textContent;    
    let [playerScore, computerScore, message] = playRound(buttonChoice, getComputerChoice());
    resultDisplay.textContent = resultDisplay.textContent + message;
    if(playerDisplay.textContent && computerDisplay.textContent){
        playerDisplay.textContent = parseInt(playerDisplay.textContent) + playerScore;
        computerDisplay.textContent = parseInt(computerDisplay.textContent) + computerScore;    
    } else {
        playerDisplay.textContent = playerScore;
        computerDisplay.textContent = computerScore;
    }
}

const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector(".results");
const playerDisplay = document.querySelector("#playerScore");
const computerDisplay = document.querySelector("#computerScore");
buttons.forEach(btn => btn.addEventListener('click', rps));

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