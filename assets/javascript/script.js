//Have the computer make a guess
let wins = 0;
let guessesRemaining = 10;
let losses = 0;
let array = [];
var options = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
let computerGuess = options[Math.floor(Math.random() * options.length)];
console.log(computerGuess);
function numberGuesser() {
  computerGuess = options[Math.floor(Math.random() * options.length)];
  guessesRemaining = 10;
  array = [];
}
//Get userinput on keyboard
document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  for (let i = 0; i < options.length; i++) {}
  array.push(userGuess);

  //Record wins, losses
  if (userGuess === computerGuess) {
    wins++;
    numberGuesser();
    console.log(computerGuess);
  }
  if (userGuess !== computerGuess) {
    guessesRemaining--;
  }
  if (guessesRemaining <= 0) {
    losses++;
    numberGuesser();
    console.log(computerGuess);
    // alert("You Lost, I know how much you love Alerts");
    instance.open();
  }

  //Display Keys already pressed
  var html =
    "<h3>Correct Guesses: " +
    wins +
    "</h3>" +
    "<h3>Losses: " +
    losses +
    "</h3>" +
    "<h3>Guesses Left: " +
    guessesRemaining +
    "</h3>" +
    "<h3>Guessed So Far: " +
    array +
    "</h3>";

  document.getElementById("counter").innerHTML = html;
};
