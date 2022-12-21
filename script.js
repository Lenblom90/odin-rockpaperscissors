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
        let newPlayerScore = parseInt(playerDisplay.textContent) + playerScore;
        let newComputerScore = parseInt(computerDisplay.textContent) + computerScore;
        if(newPlayerScore > 4 || newComputerScore > 4){
            resultDisplay.textContent = `${newPlayerScore === 5 ? "You" : "Computer"} won the game!`
            playerDisplay.textContent = newPlayerScore;
            computerDisplay.textContent = newComputerScore;
        } else {
            playerDisplay.textContent = newPlayerScore;
            computerDisplay.textContent = newComputerScore;        
        }
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