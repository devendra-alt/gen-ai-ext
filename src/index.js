import './modules/accessiblity.js';
import './styles/index.css';
import './styles/style.css';
import userInput from './modules/userInput.js';
import GenerativeAI from './modules/generativeAI.js';

const generativeAi = new GenerativeAI();

//* * user input handler */
const querySubmitButton = document.querySelector('.query-submit-button');
querySubmitButton.addEventListener('click', (event) =>
  userInput(event, generativeAi)
);
