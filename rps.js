"use strict";

// add an eventListener to each player button
const playerChoices = document.querySelectorAll('.player-choices button');
playerChoices.forEach(btn => btn.addEventListener('click', e => startRound(e)));

const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');

const resultLog = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;

function startRound(e) {
        let playerChoice = e.target.textContent.toLowerCase();
        let computerChoice = computerPlay();

        let result = playRound(playerChoice, computerChoice);
    
        if(result == "w") {
            playerScore += 1;
            playerScoreText.textContent = `Player score: ${playerScore}`;
    
            resultLog.textContent = `You picked ${playerChoice} and the computer picked ${computerChoice}, so you won this round!`;
        }
        else if(result == "l") {
            computerScore += 1;
            computerScoreText.textContent = `Computer score: ${computerScore}`;
    
            resultLog.textContent = `You picked ${playerChoice} and the computer picked ${computerChoice}, so you lost this round.`;
        }
        else { // if result == t
            let playerCapital = playerChoice[0].toUpperCase() + playerChoice.slice(1); // capitalizing the first letter of playerChoice

            resultLog.textContent = `${playerCapital} and ${computerChoice}. It's a tie round!`;
        }

    if(playerScore == 5) {
        resultLog.textContent = `You won the game ${playerScore} to ${computerScore}. Great Job!\n`;

        const btn = document.createElement('button');
        btn.textContent = "Play again";
        resultLog.appendChild(btn);

        btn.addEventListener('click', () => location.reload());

        playerChoices.forEach(choice => choice.disabled = true);
    }
    else if(computerScore == 5) {
        resultLog.textContent = `You lose the game ${playerScore} to ${computerScore}. Better luck next time!\n`;

        const btn = document.createElement('button');
        btn.textContent = "Play again";
        resultLog.appendChild(btn);

        btn.addEventListener('click', () => location.reload());

        playerChoices.forEach(choice => choice.disabled = true);
    }
}

function random_three() {
    return Math.floor(Math.random() * 3) + 1;
}

function computerPlay() {
    let choice = random_three();

    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock") {
        if(computerSelection == "rock") {
            return "t";
        }
        if(computerSelection == "paper") {
            return "l";
        }
        if(computerSelection == "scissors") {
            return "w";
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            return "w";
        }
        if(computerSelection == "paper") {
            return "t";
        }
        if(computerSelection == "scissors") {
            return "l";
        }

    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            return "l";
        }
        if(computerSelection == "paper") {
            return "w";
        }
        if(computerSelection == "scissors") {
            return "t"
        }
    }
}