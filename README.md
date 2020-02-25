# Psychic

Choose a Letter and Guess it correctly to win, guess wrong too many times in a row and you lose the game.
https://poeboyo.github.io/psychic/

## How it's made

- The variables were created by declaring them above the function that takes in the users keyboard activity as an event.

- There are counters to read the number of losses, wins, and letters guessed and is displayed back to the screen using an .innerHTML tag.

  ```javascript
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
  ```

* The data values for each variable are updated after receiving new information.

```javascript
document.onkeyup = function() {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userGuess);
for (let i = 0; i < options.length; i++) {}
array.push(userGuess);
```

- The number is generated randomly when the player either loses or wins the round and is set to play again to their hearts content.

```javascript
function numberGuesser() {
  computerGuess = options[Math.floor(Math.random() * options.length)];
  guessesRemaining = 10;
  array = [];
}
```

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Particle.js

## Difficulties and Learning

- The most difficult part of this project was looking back after 6 Months and realizing how terribly I USED to code. :(
