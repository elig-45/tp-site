import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

alert("ok")
alert('main.js est exécuté !'); // Alerte pour confirmer l'exécution

// Fichier JavaScript pour la logique du site

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// Logique du bouton "Brute Force"
document.getElementById('brute-force').addEventListener('click', () => {
  const bruteForceResponses = 'A1_1A2_2'; // Exemple de combinaison brute force
  const targetPage = `contact.html?responses=${bruteForceResponses}`;
  window.location.href = targetPage; // Redirige vers la page "Contact" avec les réponses
});
