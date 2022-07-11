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
    playerSelection = playerSelection.toLowerCase(); // might not work cause strings are immutable in JS?

    if(playerSelection == "rock") {
        if(computerSelection == "rock") {
            return "Tie! Rock and rock.";
        }
        if(computerSelection == "paper") {
            return "You lose! Paper beats rock.";
        }
        if(computerSelection == "scissors") {
            return "You win! Rock beats scissors.";
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            return "You win! Paper beats rock.";
        }
        if(computerSelection == "paper") {
            return "Tie! Paper and paper.";
        }
        if(computerSelection == "scissors") {
            return "You lose! Scissors beats paper.";
        }

    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            return "You lose! Rock beats scissors.";
        }
        if(computerSelection == "paper") {
            return "You win! Scissors beats paper.";
        }
        if(computerSelection == "scissors") {
            return "Tie! Scissors and scissors."
        }
    }
}




