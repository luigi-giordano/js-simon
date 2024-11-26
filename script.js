// Funzione per generare 5 numeri casuali tra 1 e 100
function getRandomNumbers() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1);
  }
  return numbers;
}

// Seleziona gli elementi della pagina
const numbersContainer = document.querySelector('.numbers');
const inputsContainer = document.querySelector('.inputs');
const resultContainer = document.querySelector('.result');
const timerContainer = document.querySelector('.timer');

// Genera i numeri casuali e li mostra
const randomNumbers = getRandomNumbers();
numbersContainer.innerText = `Numeri: ${randomNumbers.join(', ')}`;

// Timer di 10 secondi
let countdown = 10;
timerContainer.innerText = `Tempo rimanente: ${countdown} secondi`;
