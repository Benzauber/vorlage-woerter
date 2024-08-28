function checkAnswer(inputElement, answer) {
  var userAnswer = inputElement.value.trim();
  var feedbackElement = inputElement.nextElementSibling;

  if (!feedbackElement || !feedbackElement.classList.contains("feedback")) {
    feedbackElement = document.createElement("div");
    feedbackElement.classList.add("feedback");
    inputElement.parentNode.appendChild(feedbackElement);
  }

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    feedbackElement.className = "feedback correct";
    feedbackElement.textContent = "Richtig!";
  } else {
    feedbackElement.className = "feedback incorrect";
    feedbackElement.textContent = "Falsch! Die richtige Antwort lautet: " + answer;
  }
}

function swapQA() {
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var questionElement = cards[i].querySelector(".question");
    var answerElement = cards[i].querySelector(".answer");
    var feedbackElement = cards[i].querySelector(".feedback");

    var tempQuestion = questionElement.textContent;
    var tempAnswer = answerElement.getAttribute("data-answer");

    questionElement.textContent = tempAnswer;
    answerElement.setAttribute("data-answer", tempQuestion);
    answerElement.value = "";

    if (feedbackElement) {
      feedbackElement.parentNode.removeChild(feedbackElement);
    }
  }
}
