// score var

let humanScore = 0;
let computerScore = 0;

// query selectors

const humanPuntuation = document.querySelector("#humanPuntuation");
const computerPuntuation = document.querySelector("#computerPuntuation");
const ronda = document.querySelector("#ronda");
const winner = document.querySelector("#winner");

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
        return ronda.textContent = "Empate";
    } else if(humanSelection == "rock" && computerSelection == "scissors") {
        humanScore++
        return ronda.textContent= "You win with rock to scissors!!";
    } else if(humanSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return ronda.textContent = "Computer wins to you with paper";
    } else if(humanSelection == "paper" && computerSelection == "rock") {
        humanScore++
        return ronda.textContent = "You win with paper to rock";
    } else if(humanSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        return ronda.textContent = "Computer wins to you with scissors";
    } else if(humanSelection == "scissors"&& computerSelection == "paper") {
        humanScore++
        return ronda.textContent = "You win with scissors to paper";
    } else if(humanSelection == "scissors"&& computerSelection == "rock") {
        computerScore++
        return ronda.textContent = "Computer wins to you with rock";
    } 
}

function buttonLogic() {
    humanPuntuation.textContent = humanScore;
    computerPuntuation.textContent = computerScore;
    if (humanScore == 5) {
        winner.textContent = "Humano ganador!!!!!";
    } else if (computerScore == 5) {
        winner.textContent = "Ordenador ganador!!!";
    }

    winner.setAttribute("style", "color: red; background: white;");
}

// On click buttons

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock");
    buttonLogic();
  });

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper");
    buttonLogic();
  });

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors");
    buttonLogic();
  });
