// variables puntuation

let humanScore = 0;
let computerScore = 0;

// function to get random rock paper scissors from computer

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    let result = Math.floor(Math.random() * options.length);
    
    if(result == 0) {
        return options[0]
    } else if (result == 1) {
        return options[1]
    } else if (result == 2) {
        return options[2]
    }
}

// function to get prompt from user

function getHumanChoice() {
    let seleccion = prompt("Choose: Rock, Paper or Scissors")
    return seleccion.toLowerCase();
}

// function round

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        return console.log("Empate!!!!")
    } else if(humanChoice == "rock" || computerChoice == "scissors") {
        humanScore++
        return console.log("You win with rock to scissors!!")
    } else if(humanChoice == "rock"|| computerChoice == "paper") {
        computerScore++
        return console.log("Computer wins to you with paper")
    } else if(humanChoice == "paper"|| computerChoice == "rock") {
        humanScore++
        return console.log("You win with paper to rock")
    } else if(humanChoice == "paper"|| computerChoice == "scissors") {
        computerScore++
        return console.log("Computer wins to you with scissors")
    } else if(humanChoice == "scissors"|| computerChoice == "paper") {
        humanScore++
        return console.log("You win with scissors to paper")
    } else if(humanChoice == "scissors"|| computerChoice == "rock") {
        computerScore++
        return console.log("Computer wins to you with rock")
    } 
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);

// function game

function playGame() {

}

console.log("Computer choose: " + computerSelection)
console.log("You choose: " + humanSelection)
console.log("Puntuación computer: "+ computerScore)
console.log("Puntuación humano: "+ humanScore)
