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
const btnVerifica = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');

// Genera i numeri casuali e li mostra
const randomNumbers = getRandomNumbers();
numbersContainer.innerText = `Numeri: ${randomNumbers.join(', ')}`;

// Timer di 10 secondi
let countdown = 10;
timerContainer.innerText = `Tempo rimanente: ${countdown} secondi`;


const timerInterval = setInterval(() => {
  countdown--;
  if (countdown > 0) {
      timerContainer.textContent = `Tempo rimanente: ${countdown} secondi`;
      
  } else {
      clearInterval(timerInterval);
      timerContainer.classList.remove('alert-primary');
      timerContainer.classList.add('alert-secondary');
      timerContainer.textContent = 'Tempo scaduto!';
      inputsContainer.classList.remove('d-none');

      // Nascondi i numeri e mostra gli input
      numbersContainer.classList.add('d-none');
      
  }
}, 1000);

btnVerifica.addEventListener('click', function(){

  let contatore = 0
  let arrayRisultato = []

  for (let i = 0; i < inputs.length - 1; i++) {
    if(randomNumbers.includes(inputs[i].value)) {
      contatore++
      arrayRisultato.push(inputs[i].value)
    }
    console.log(contatore, arrayRisultato)
  }
})