// // Disable input
// guessInput.disabled = true;
// // Change border color
// guessInput.style.borderColor = 'green';
// // Set Message
// setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');

const message = document.querySelector('.message');

// Game values
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessLeft = 3;

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', runGame);
// play again listener
game.addEventListener('mousedown', function playAgain(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

function runGame() {
  let guess = parseInt(guessInput.value);
  // console.log(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    showMessage(`Please enter a number between ${min} and ${max}`, 'red');
    guessInput.value = '';
    return;
  }
  guessLeft -= 1;
  if (parseInt(guessInput.value) === winningNum) {
    guessInput.disabled = true;

    showMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
  } else {
    if (guessLeft === 0) {
      guessInput.disabled = true;

      showMessage(`Game Over, you lose. The answer is ${winningNum}.`, 'red');
      guessBtn.value = 'Play Again';
      guessBtn.className += 'play-again';
    } else {
      guessInput.value = '';
      showMessage(`${guess} is not correct, ${guessLeft} guesses left`, 'blue');
    }
  }
}

function showMessage(msg, color) {
  guessInput.style.borderColor = color;
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNum(min, max) {
  // console.log(Math.floor(Math.random() * (max - min + 1) + min));
  return Math.floor(Math.random() * (max - min + 1) + min);
}
