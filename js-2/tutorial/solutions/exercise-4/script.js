// Define dice images
const diceImages = [
  'assets/dice-red-1.png',
  'assets/dice-red-2.png',
  'assets/dice-red-3.png',
  'assets/dice-red-4.png',
  'assets/dice-red-5.png',
  'assets/dice-red-6.png',
];

// Get elements from the DOM
const betSelect = document.getElementById('bet');
const rollButton = document.getElementById('roll');
const dicesDiv = document.getElementById('dices');
const resultDiv = document.getElementById('result');

// Add event listener to roll button
rollButton.addEventListener('click', rollDices);

function rollDices() {
  // Roll three dices
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dice3 = Math.floor(Math.random() * 6) + 1;

  // Display dices on the screen
  dicesDiv.innerHTML = `
    <div class="dice" style="background-image: url(${diceImages[dice1 - 1]})"></div>
    <div class="dice" style="background-image: url(${diceImages[dice2 - 1]})"></div>
    <div class="dice" style="background-image: url(${diceImages[dice3 - 1]})"></div>
  `;

  // Calculate sum of dices
  const sum = dice1 + dice2 + dice3;

  // Determine the result based on the sum and the user's bet
  let result;
  if (dice1 === dice2 && dice2 === dice3) {
    result = 'You lose (three of a kind)';
  } else if ((sum >= 4 && sum <= 10 && betSelect.value === 'small') || (sum >= 11 && sum <= 17 && betSelect.value === 'big')) {
    result = 'You win';
    resultDiv.classList.remove("lose");
    resultDiv.classList.add("win");
  } else {
    result = 'You lose';
    resultDiv.classList.remove("win");
    resultDiv.classList.add("lose");
  }

  // Display the result and the sum on the screen
  resultDiv.textContent = `${result} (Sum: ${sum})`;
}