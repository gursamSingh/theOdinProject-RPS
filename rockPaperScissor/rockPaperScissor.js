let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

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
        result = `You Win! <br><br>
        ${playerWeapon} beats ${computerWeapon}<br><br>
        player score : ${playerScore} computer score: ${computerScore}`;

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons();
        }
    } else if (playerWeapon == computerWeapon) {
        result = `It is a Tie. <br><br> You both chose ${playerWeapon} <br><br> player score : ${playerScore} \n computer score: ${computerScore}`;
    } else {
        computerScore += 1;
        result = `You Lose. <br><br> ${computerWeapon} beats ${playerWeapon} <br><br> player score : ${playerScore} \n computer score: ${computerScore}`;
        if (computerScore == 5) {
            result += '<br><br> I won the game! Reload the page to play again'
            disableButtons()
        }
    }
    document.getElementById('result').innerHTML = result
    return

}

buttons.forEach(button => {
    button.addEventListener("click", function () {
        playRound(button.value);
    })
})