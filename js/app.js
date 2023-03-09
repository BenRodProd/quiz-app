const bookmarkButton = document.querySelector('[data-js="BookmarkButton"]');
const AnswerBox = document.querySelector('[data-js="answerBox"]');
const AnswerButton = document.querySelector('[data-js="answerButton"]');

//default Values
AnswerBox.setAttribute("hidden", "");
let bookmarked = false;
let answerActive = false;
//Bookmark
bookmarkButton.addEventListener("click", () => {
  if (bookmarked) {
    bookmarkButton.classList.remove("Bookmarked");
    bookmarkButton.classList.add("notBookmarked");
    bookmarked = false;
  } else {
    bookmarkButton.classList.remove("notBookmarked");
    bookmarkButton.classList.add("Bookmarked");
    bookmarked = true;
  }
});

//Show Answer
AnswerButton.addEventListener("click", () => {
  if (answerActive) {
    AnswerBox.setAttribute("hidden", "");
    answerActive = false;
  } else {
    AnswerBox.removeAttribute("hidden");
    answerActive = true;
  }
});
