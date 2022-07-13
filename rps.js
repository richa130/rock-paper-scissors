const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const compSelectionText = document.querySelector('.comp-selection');
const winner = document.querySelector('.winner');

rock.addEventListener('click', playRoundUI);
paper.addEventListener('click', playRoundUI);
scissors.addEventListener('click', playRoundUI);

function playRoundUI(e) {
    e.target.style.border = '2px solid black';

    playerSelection = e.target.textContent.toLowerCase(); // target gets the actual html element, text content gets its text (r,p,s)
    computerSelection = computerPlay();
    compSelectionText.textContent = computerSelection; 

    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);

    result = playRound(playerSelection, computerSelection);
    winner.textContent = `The player ${result}`;
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
            return "Tie";
        }
        if(computerSelection == "paper") {
            return "Lose";
        }
        if(computerSelection == "scissors") {
            return "Win";
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            return "Win";
        }
        if(computerSelection == "paper") {
            return "Tie";
        }
        if(computerSelection == "scissors") {
            return "Lose";
        }

    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            return "Lose";
        }
        if(computerSelection == "paper") {
            return "Win";
        }
        if(computerSelection == "scissors") {
            return "Tie"
        }
    }
}

/* // logic that plays 5 rounds: 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let result;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Pick a choice (rock, paper, or scissors): ").toLowerCase();
        computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection);

        if(result == "Win") {
            playerScore++;
        }
        else if(result == "Lose") {
            computerScore++;
        }

        console.log(`Round ${i}: ${result}! You picked ${playerSelection} and the computer picked ${computerSelection}.`);
    }

    if(playerScore > computerScore) {
        console.log(`Good Job! You won with a score of ${playerScore}.`);
    }
    else if(playerScore == computerScore) {
        console.log(`You tied with a score of ${playerScore}. At least you didn't lose?`);
    }
    else {
        console.log(`You lose with a score of ${playerScore}. Better luck next time!`);
    }
}
*/