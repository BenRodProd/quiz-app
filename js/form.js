const form = document.querySelector('[data-js="newQuestionCard"]');
const Question = document.querySelector('[data-js="newQuestionArea"]');
const display = document.querySelector('[data-js="displayNewCard"]');
const QuestionLettersLeft = document.querySelector(
  '[data-js="QuestionLettersLeft"]'
);
const AnswerLettersLeft = document.querySelector(
  '[data-js="AnswerLettersLeft"]'
);
const Answer = document.querySelector('[data-js="newAnswerArea"]');
//getFormElements

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  console.log(formElements);
  const newQuestionText = formElements[0].value;
  const newAnswerText = formElements[1].value;
  const newTagsText = formElements[2].value;

  display.innerHTML = `
<section class="question">
      <button
        aria-label="Question Bookmark Button"
        class="question__button-bookmark notBookmarked"
        data-js="BookmarkButton"
      >
        <img src="bookmark-icon.png" alt="Bookmark" />
      </button>
      <p>${newQuestionText}</p>
      
      <div class="answer" data-js="answerBox">${newAnswerText}</div>
      <ul class="question__list-tags">
        <li>${newTagsText}</li>
        
      </ul>
    </section>
    `;
});

//Show Letters left to input
Question.addEventListener("input", (event) => {
  const target = event.target;
  const currentlength = target.value.length;
  const lettersleft = 150 - currentlength;
  QuestionLettersLeft.innerText = `You have ${lettersleft} letters left`;
});
Answer.addEventListener("input", (event) => {
  const target = event.target;
  const currentlength = target.value.length;
  const lettersleft = 150 - currentlength;
  AnswerLettersLeft.innerText = `You have ${lettersleft} letters left`;
});
