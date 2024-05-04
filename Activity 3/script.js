var randomNumber = Math.floor(Math.random() * 10) + 1;
var attempts = 0;

document.getElementById("submitGuessBtn").addEventListener("click", function() {
  var guess = parseInt(document.getElementById("guessInput").value);
  var resultParagraph = document.getElementById("result");

  if (isNaN(guess) || guess < 1 || guess > 10) {
    resultParagraph.textContent = "Invalid input: Please input a number between 1 and 10.";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    resultParagraph.textContent = "Congratulations! You've guessed the correct number in " + attempts + " attempts.";
  } else if (guess < randomNumber) {
    resultParagraph.textContent = "Too low! Try again.";
  } else {
    resultParagraph.textContent = "Too high! Try again.";
  }
});
