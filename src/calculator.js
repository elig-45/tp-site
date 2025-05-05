// Fichier JavaScript pour la calculatrice

document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.getElementById('calculator');
  const historyList = document.querySelector('#side-history ul');

  let currentInput = '';
  let history = [];

  // Création de l'écran
  const screen = document.createElement('div');
  screen.className = 'bg-gray-900 text-white text-right p-4 rounded mb-4 text-2xl';
  screen.textContent = '0';
  calculator.appendChild(screen);

  // Création du clavier visuel
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'grid grid-cols-4 gap-2';

  buttons.forEach((btn) => {
    const button = document.createElement('button');
    button.textContent = btn;
    button.className = 'bg-gray-700 text-white p-4 rounded shadow hover:bg-gray-600';
    button.addEventListener('click', () => handleInput(btn));
    buttonContainer.appendChild(button);
  });

  calculator.appendChild(buttonContainer);

  // Gestion des entrées clavier
  document.addEventListener('keydown', (e) => {
    const validKeys = [...buttons, 'Enter', 'Backspace'];
    if (validKeys.includes(e.key)) {
      handleInput(e.key === 'Enter' ? '=' : e.key);
    }
  });

  function isValidExpression(expression) {
    const validPattern = /^[0-9+\-*/.() ]+$/;
    return validPattern.test(expression);
  }

  function handleInput(input) {
    if (input === 'C') {
      currentInput = '';
      screen.textContent = '0';
    } else if (input === '=') {
      if (isValidExpression(currentInput)) {
        try {
          console.log('Expression évaluée :', currentInput);
          const result = eval(currentInput);
          if (result !== undefined) {
            history.push(`${currentInput} = ${result}`);
            updateHistory();
            currentInput = result.toString();
            screen.textContent = result;
          } else {
            screen.textContent = 'Erreur';
          }
        } catch (error) {
          console.error('Erreur lors de l\'évaluation :', error);
          screen.textContent = 'Erreur';
        }
      } else {
        screen.textContent = 'Erreur';
      }
    } else {
      currentInput += input;
      screen.textContent = currentInput;
    }
  }

  function updateHistory() {
    historyList.innerHTML = '';
    history.slice(-5).forEach((entry) => {
      const li = document.createElement('li');
      li.textContent = entry;
      historyList.appendChild(li);
    });
  }
});