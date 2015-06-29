/'use strict';/

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return  move || getInput(move); 
}

function getComputerMove(move) {
    console.log(randomPlay());
    return move || randomPlay();   
}
function getWinner() {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    if (playerMove === computerMove) {
    winner= 'tie';
        }
    else if (playerMove === 'rock')
    if (computerMove === 'scissors') {
        winner= 'player';
     }
    else {
        winner = 'computer'
        }
    else if (playerMove === 'paper')
    if (computerMove === 'rock') {
        winner= 'player';
        }
    else {
        winner = 'computer'
        }
    else if (playerMove === 'scissors')
    if (computerMove == 'paper') {
        winner= 'player';
        }
    else {
        winner = 'computer'
        }
    console.log("the Winner is: " + winner);
    return winner;
}
