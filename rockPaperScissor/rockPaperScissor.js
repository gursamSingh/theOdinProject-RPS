
// player choice
function playerSelection() {
    let playerChoice = prompt("What is your choice?");
    return playerChoice;
}


// computer choice
function computerSelection() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
    // let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    // if (randomNumber == 1) {
    //     return "rock"
    // } else if (randomNumber == 2) {
    //     return "paper"
    // }
    // else {
    //     return "scissor"
    // }

}

let playerWeapon = playerSelection();
let computerWeapon = computerSelection();

// player VS computer round 
function playRound(playerWeapon, computerWeapon) {
    if ((playerWeapon == "rock" && computerWeapon == "scissor") || (playerWeapon == "paper" && computerWeapon == "rock") || (playerWeapon == "scissor" && computerWeapon == "paper")) {
        console.log(`${playerWeapon} beats ${computerWeapon} ---> Player Winssss!!!!`);
    } else if (playerWeapon == computerWeapon) {
        console.log("Tie both have same weapon");
    } else {
        console.log(`Computer Winsss!!!! ${computerWeapon} beats ${playerWeapon}`);
    }
}

playRound(playerWeapon, computerWeapon);