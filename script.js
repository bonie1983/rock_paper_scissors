// score var

let humanScore = 0;
let computerScore = 0;


// round function
function playRound() {

    // assign var

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    // random computer input function

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

    // human input function

    function getHumanChoice() {
        let choice = window.prompt("Play rock, paper or scissors a minimun of 5 times!!").toLowerCase();
        while (choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = window.prompt("You didn't choose correctly. Choose again between: Rock, Paper or Scissors.").toLowerCase();
        }
        return choice;
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

// Game function 5 games

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()

    // Game logic

    if(humanScore == computerScore) {
        console.log("Empate!!!")
    } else if(humanScore < computerScore) {
        console.log("Computer wins!!")
    } else if(humanScore > computerScore) {
        console.log("You win!!!!")
    }

    // log game score

    console.log("Human: " + humanScore)
    console.log("Computer: " + computerScore)
}

// Game init

playGame()