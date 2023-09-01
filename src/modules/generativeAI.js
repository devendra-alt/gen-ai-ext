import { displayLoading, errorMessage, hideLoading } from './accessiblity.js';
import { addRespondElement } from './conversation.js';

class GenerativeAI {
  #GENERATIVE_AI_URL;

  constructor() {
    this.#GENERATIVE_AI_URL =
      'https://gen-ai-ext-backend.onrender.com/generativeAI/generate';
  }

  async getResponse(query) {
    displayLoading();
    try {
      const response = await fetch(this.#GENERATIVE_AI_URL, {
        headers: {},
        method: 'POST',
        body: {
          query,
        },
      });
      const { message } = await response.json();
      addRespondElement(message);
      hideLoading();
    } catch (error) {
      errorMessage();
    }
  }
}

export default GenerativeAI;
