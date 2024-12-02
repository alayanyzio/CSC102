//starts the game "Craps"//
function playGame() {
//generates random number for die 1//
let die1 = Math.floor(Math.random() * 6) + 1; 
//generates random number for die 2//
let die2 = Math.floor (Math.random()*6) +1;
//calculates sum of die 1 and 2 //
let sum= die1 + die2;
//updates the outcome on the webpage//
document.getElementById("gameResult").innerHTML = "Die 1: " + die1 + "| Die 2: " + die2 + " | Sum: " + sum + "<br>"
//indicates loss if sum is 7 or 11//
if (sum === 7 || sum === 11){
    document.getElementById("gameResult").innerHTML += "CRAPS - You Lose!";
//indicates win if dice are even and equal//
} else if (die1 === die2 && die1 % 2 === 0){
    document.getElementById("gameResult").innerHTML += "You Won!";
//indicates push/tie if neither of previous conditions are met//
} else {
    document.getElementById("gameResult").innerHTML += "You Pushed!";
//outputs information//
    console.log("You Pushed! Sum is " + sum + " and dice are not doubles");
}
}