import sendIcon from '../assets/sent-btn-icon.svg';

//* * generative-ai-query-input multiline  */

const generativeAiQueryInput = document.querySelector(
  '#generative-ai-query-input',
);

generativeAiQueryInput.addEventListener('input', (event) => {
  event.target.style.height = `${event.target.scrollHeight}px`;
});

//* * generative-ai-query-input sent icon */

const querySubmitButton = document.querySelector('.query-submit-button');

const queryButtonIcon = document.createElement('img');

queryButtonIcon.classList.add('query-button-icon');
queryButtonIcon.ariaLabel = 'query-button-icon';
queryButtonIcon.src = sendIcon;
queryButtonIcon.alt = 'query-button-icon';

querySubmitButton.appendChild(queryButtonIcon);

//* * generative-ai-container loading */

const generativeAiQueryInfo = document.querySelector(
  '.generative-ai-query-info',
);

export const displayLoading = () => {
  generativeAiQueryInfo.ariaHidden = false;
  generativeAiQueryInfo.textContent = 'Loading....';
};

export const hideLoading = () => {
  generativeAiQueryInfo.ariaHidden = true;
};

export const errorMessage = () => {
  generativeAiQueryInfo.ariaHidden = false;
  generativeAiQueryInfo.ariaInvalid = true;
  generativeAiQueryInfo.textContent = 'error while generating respond';
};

//* * generative-ai-conversations */

export const addRespond = () => {

};
