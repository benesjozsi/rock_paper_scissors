const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;   



function playRound () {

    let getComputerChoice =  options[Math.floor(Math.random()*options.length)];
    const computerSelection = getComputerChoice;
    let playerChoice = prompt("Please enter your weapon for this round: ",);
    let playerSelection = playerChoice.toLowerCase();

console.log ("The computer's choice: ", computerSelection);
console.log ("Your choice: ", playerSelection);

    if (playerSelection === computerSelection) {
        console.log ("It is a tie.");
        }   else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log ("You win! Rock beats scisscors!"); 
            playerScore++;
        }   else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log ("You lose! Paper beats rock!");
            computerScore++;
        }   else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log ("You win! Paper beats rock!");
            playerScore++;
        }   else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log ("You lose! Scissors beats paper!");
            computerScore++;
        }   else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log ("You win! Scissors beats paper!");
            playerScore++;
        }   else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log ("You lose! Rock beats scissors!");
            computerScore++;
        }   else {
            console.log ("The computer wins because you didn't choose rock, paper or scissors.");
            computerScore++;
        };
        console.log ("Your score: ",playerScore);
        console.log ("Computer's score: ",computerScore);
    }

function game () {
    for (let i = 0; i <5; i++){
playRound();
    }

    if (playerScore < computerScore) {
        console.log ("You lost! You have ",computerScore-playerScore," points less than the computer.");
    } else if (playerScore > computerScore) {
        console.log ("You won! You have ",playerScore-computerScore," points more than the computer.");
    } else {
        console.log ("It is a tie. Both you and the computer have same amount of points.");
    }
    
newGame();
}

function newGame () {
let newGameAnswer = prompt("Do you want to play again?",);
if (newGameAnswer === "yes") {
    computerScore = 0;
    playerScore = 0;
    game();
 } else if (newGameAnswer === "no") {
    } else {
        console.log("Please enter yes or no.")
        newGame();
    }
}

game();




