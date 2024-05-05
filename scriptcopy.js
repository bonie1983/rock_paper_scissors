// score var

let humanScore = 0;
let computerScore = 0;

// query selectors

const humanPuntuation = document.querySelector("#humanPuntuation");
const computerPuntuation = document.querySelector("#computerPuntuation");

// round function
function playRound(selector) {

    let computerSelection = getComputerChoice();
    let humanSelection = selector;

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

    // round logic plus score increment

    if(computerSelection == humanSelection) {
        return console.log("Empate")
    } else if(humanSelection == "rock" && computerSelection == "scissors") {
        humanScore++
        return console.log("You win with rock to scissors!!")
    } else if(humanSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return console.log("Computer wins to you with paper")
    } else if(humanSelection == "paper" && computerSelection == "rock") {
        humanScore++
        return console.log("You win with paper to rock")
    } else if(humanSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        return console.log("Computer wins to you with scissors")
    } else if(humanSelection == "scissors"&& computerSelection == "paper") {
        humanScore++
        return console.log("You win with scissors to paper")
    } else if(humanSelection == "scissors"&& computerSelection == "rock") {
        computerScore++
        return console.log("Computer wins to you with rock")
    } 
}

// On click buttons

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock");
    humanPuntuation.textContent = humanScore;
    computerPuntuation.textContent = computerScore;
  });

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper");
    humanPuntuation.textContent = humanScore;
    computerPuntuation.textContent = computerScore;
  });

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors");
    humanPuntuation.textContent = humanScore;
    computerPuntuation.textContent = computerScore;
  });
