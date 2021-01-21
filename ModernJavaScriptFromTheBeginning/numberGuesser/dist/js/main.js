/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');

const message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  // console.log(guessInput.value);
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
  }
  // Check if won
  if (guess === winningNum) {
    // Game Over - won

    // // Disable input
    // guessInput.disabled = true;
    // // Change border color
    // guessInput.style.borderColor = 'green';
    // // Set Message
    // setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game Over - lost

      // // Disable input
      // guessInput.disabled = true;
      // // Change border color
      // guessInput.style.borderColor = 'red';
      // // Set Message
      // setMessage(
      //   `Game Over, you lost. The correct number was ${winningNum}`,
      //   'red'
      // );
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // clear input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Change text color
  message.style.color = color;
  // Set Message
  setMessage(msg);

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Random Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// function runGame() {}
