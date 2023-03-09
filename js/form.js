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
  const NewAnswerDiv = document.querySelector('[data-js="NewAnswerForm"]');
  const NewQuestionDiv = document.querySelector('[data-js="NewQuestionForm"]');
  const tagsUl = document.querySelector('[data-js="list-tags"]');
  const paragraph = document.createElement("p");
  // paragraph.classList.add("question");
  paragraph.innerText = newQuestionText;
  NewQuestionDiv.append(paragraph);
  const answerP = document.createElement("p");
  answerP.innerText = newAnswerText;
  // answerP.classList.add("")
  NewAnswerDiv.append(answerP);
  const TagsLi = document.createElement("li");
  const newTagsTextArray = newTagsText.split(" ");
  for (let i = 0; i < newTagsTextArray.length; i++) {
    let liTag = document.createElement("li");

    liTag.innerText = newTagsTextArray[i];
    tagsUl.append(liTag);
  }

  // TagsLi.innerText = newTagsText;

  // tagsUl.append(TagsLi);
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
