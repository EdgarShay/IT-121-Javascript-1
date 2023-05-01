

// first, create an array containing the option rock,paper and scissors
const myArr = ["Rock", "Paper", "Scissors"];

function play() {
// generate a random index value for both the player and the computer using math.floor and math.random() * 3)
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);

// The message variable to store the result of the game
// sarting with the player's selection and the computer's selection.
let message = "Player " + myArr[player] + " vs Computer " + myArr[computer] + " - ";


// if statement to check for a tie / if the player and the computer selected the same option. 

if (player === computer) {

// Add It' is tie.
  message += "It's a tie!";

// else if statements to check for all possible winning scenarios
// if the player selects "Rock" (index value 0) and the computer selects "scissors" (index value2)
} else if ((player === 0 && computer === 2 || player === 1 && computer === 0 || player === 2 && computer === 1)) {

// message "player wins"
  message += "Player wins!";
} else {

// message computer wins
message += "Computer wins!";

}

// output final message
// console.log(message);
// outputElem.textContent = message;
document.getElementById("output").textContent = message;

}





