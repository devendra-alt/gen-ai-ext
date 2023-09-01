import botIcon from '../assets/bot.svg';
import userIcon from '../assets/user.svg';

const generativeAiChatContainer = document.querySelector(
  '.generative-ai-chat-container',
);
export const addQuestionElement = (query) => {
  const questionEl = document.createElement('div');
  const questionParagraphEl = document.createElement('p');
  const questionElIcon = document.createElement('img');

  questionEl.ariaLabel = 'user-question';
  questionElIcon.alt = 'user-icon';

  questionEl.classList.add('generative-ai-user-query');
  questionParagraphEl.classList.add('generative-ai-user-query-paragraph');
  questionElIcon.classList.add('generation-ai-user-query-icon');

  questionParagraphEl.textContent = query;
  questionElIcon.src = userIcon;

  questionEl.appendChild(questionElIcon);
  questionEl.appendChild(questionParagraphEl);
  generativeAiChatContainer.appendChild(questionEl);
};
export const addRespondElement = (respond) => {
  const respondEl = document.createElement('div');
  const respondPagraphEl = document.createElement('p');
  const respondIcon = document.createElement('img');

  respondEl.classList.add('generative-ai-respond');
  respondPagraphEl.classList.add('generative-ai-respond-paragraph');
  respondIcon.classList.add('generative-ai-respond-icon');

  respondEl.ariaLabel = 'generative-ai-respond';
  respondIcon.alt = 'generative-ai-respond-icon';
  respondIcon.src = botIcon;

  respondPagraphEl.textContent = respond;
  respondEl.appendChild(respondIcon);
  respondEl.appendChild(respondPagraphEl);
  generativeAiChatContainer.appendChild(respondEl);
};
