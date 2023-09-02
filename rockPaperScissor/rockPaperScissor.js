let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const displayScoreDiv = document.querySelector('.displayScore');
const playerScorePara = document.querySelector('.playerScore');
const computerScorePara = document.querySelector('.computerScore');

// computer choice
function computerSelection() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}


// player VS computer round 
function playRound(playerWeapon) {
    let computerWeapon = computerSelection();
    let result = "";

    if ((playerWeapon == "rock" && computerWeapon == "scissor") || (playerWeapon == "paper" && computerWeapon == "rock") || (playerWeapon == "scissor" && computerWeapon == "paper")) {
        playerScore += 1;
        result = `You Win! You chose ${playerWeapon} & The computer chose ${computerWeapon}.`;

        if (playerScore == 5) {
            disableButtons();
        }
    } else if (playerWeapon == computerWeapon) {
        result = `It is a Tie. You both chose ${playerWeapon}.`;
    } else {
        computerScore += 1;
        result = `You Lose. The computer chose ${computerWeapon} & You chose ${playerWeapon}.`;
        
        if (computerScore == 5) {
            disableButtons()
        }
    }
    playerScorePara.innerHTML = `Player Score : ${playerScore}`;
    computerScorePara.innerHTML = `Computer Score : ${computerScore}`;
    document.getElementById('result').innerHTML = result;
    return result
}

buttons.forEach(button => {
    button.addEventListener("click", function () {
        playRound(button.id);
        if (playerScore == 5) {
            document.getElementById('result').innerHTML = `You won the game! Reload the page to play again`;
        } else if(computerScore == 5){
            document.getElementById('result').innerHTML = `I won the game! Reload the page to play again`;
        }

    })
})