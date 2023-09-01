import { addQuestionElement } from './conversation.js';

const userInputField = document.querySelector('#generative-ai-query-input');
const generativeAiQueryInfo = document.querySelector(
  '.generative-ai-query-info',
);

const userInput = (event, generativeAi) => {
  //* * default operations */
  event.preventDefault();
  generativeAiQueryInfo.ariaHidden = true;
  generativeAiQueryInfo.ariaInvalid = false;

  const userInputValue = userInputField.value.trim().toLowerCase();
  userInputField.value = '';

  if (!userInputValue) {
    generativeAiQueryInfo.textContent = 'No Message found';
    generativeAiQueryInfo.ariaHidden = false;
    generativeAiQueryInfo.ariaInvalid = true;
    return;
  }
  addQuestionElement(userInputValue);
  generativeAi.getResponse(userInputValue);
};

export default userInput;
