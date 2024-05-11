// score var

let humanScore = 0;
let computerScore = 0;

// query selectors

const humanPuntuation = document.querySelector("#humanPuntuation");
const computerPuntuation = document.querySelector("#computerPuntuation");
const text = document.querySelector("#text");
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
        return text.textContent = "Empate. Intenta de nuevo";
    } else if(humanSelection == "rock" && computerSelection == "scissors") {
        humanScore++
        return text.textContent= "Has elegido roca y el ordenador tijeras. Tú ganas!!";
    } else if(humanSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return text.textContent = "El ordenador te gana con papel al haber tú elegido roca.";
    } else if(humanSelection == "paper" && computerSelection == "rock") {
        humanScore++
        return text.textContent = "Has elegido papel y el ordenador roca. Tú ganas!!";
    } else if(humanSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        return text.textContent = "El ordenador te gana con tijeras al haber elegido tu papel.";
    } else if(humanSelection == "scissors"&& computerSelection == "paper") {
        humanScore++
        return text.textContent = "Has elegido tijeras y el ordenador papel. Tú ganas!!";
    } else if(humanSelection == "scissors"&& computerSelection == "rock") {
        computerScore++
        return text.textContent = "El ordenador te gana con roca al haber elegido tú tijeras.";
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
