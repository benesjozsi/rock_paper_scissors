//computer options
const options = ["rock", "paper", "scissors"];

//starting score
let playerScore = 0;
let computerScore = 0;   

//game triggers
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
rock.addEventListener("click",playRock);
paper.addEventListener("click",playPaper);
scissors.addEventListener("click",playScissors);

//player choices functions
function playRock () {
    playRound("rock");
}

function playPaper () {
    playRound("paper");
}

function playScissors () {
    playRound("scissors");
}

//declaring variants for displaying info
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const scores = document.getElementById ("scores");
const newGame = document.getElementById ("newgame");
const newGameButton = document.createElement("button");
const paraOne = document.createElement ("p");
const paraTwo = document.createElement ("p");
const paraThree = document.createElement ("p");
const paraFour = document.createElement ("p");
paraFour.textContent = "";


//game function
function playRound (playerChoice) {

    let getComputerChoice =  options[Math.floor(Math.random()*options.length)];
    const computerSelection = getComputerChoice;
    const playerSelection = playerChoice;
    const nodeOne = document.createTextNode ("Computer's choice: " + computerSelection)
    choices.textContent = "Your choice: " + playerSelection;
    paraOne.textContent = "Computer's choice: " + computerSelection;
    choices.appendChild(paraOne);
    choices.appendChild(paraFour);   

    
    if (playerSelection === computerSelection) {
        result.textContent = "It is a tie as " + playerSelection + " ties with " + computerSelection + ".";
        }   else if (playerSelection === "rock" && computerSelection === "scissors") {
            result.textContent = "You win! Rock beats scisscors!"; 
            playerScore++;
        }   else if (playerSelection === "rock" && computerSelection === "paper") {
            result.textContent = "You lose! Paper beats rock!";
            computerScore++;
        }   else if (playerSelection === "paper" && computerSelection === "rock") {
            result.textContent = "You win! Paper beats rock!";
            playerScore++;
        }   else if (playerSelection === "paper" && computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beats paper!";
            computerScore++;
        }   else if (playerSelection === "scissors" && computerSelection === "paper") {
            result.textContent = "You win! Scissors beats paper!";
            playerScore++;
        }   else if (playerSelection === "scissors" && computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors!";
            computerScore++;
        }   else {
            alert ("The computer wins because you didn't choose rock, paper or scissors.");
        };
        scores.appendChild(paraFour);
        scores.textContent = "Your score: " + playerScore;
        scores.appendChild(paraThree);
        paraThree.textContent = "Computer's score: " + computerScore;
        if (playerScore === 5)  {
            newGame.textContent = "You win as you have " + (playerScore - computerScore) + " points more than the computer.";
            newGame.appendChild(paraTwo);
            paraTwo.textContent = "";
            newGame.appendChild(newGameButton);
            newGameButton.textContent = "Play a new game!";
            newGameButton.addEventListener("click", newGameFunction);
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            //rock.addEventListener("click",playRockAgain);
            //paper.addEventListener("click",playPaperAgain);
            //scissors.addEventListener("click",playScissorsAgain);
        } else if (computerScore === 5) {
            newGame.textContent = "You lose as you have " + (computerScore - playerScore) + " points less than the computer.";
            newGame.appendChild(paraTwo);
            paraTwo.textContent = "";
            newGame.appendChild(newGameButton);
            newGameButton.textContent = "Play a new game!";
            newGameButton.addEventListener("click", newGameFunction);
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            //rock.addEventListener("click",playRockAgain){};
            //paper.addEventListener("click",playPaperAgain);
            //scissors.addEventListener("click",playScissorsAgain);
        }
    }

//resetting the displayed info for a fresh start    
function newGameFunction () {
    playerScore = 0;
    computerScore = 0;
    newGame.textContent = "";
    result.textContent = "";
    choices.textContent = "";
    scores.textContent = "";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}