var audio = false;

var correctAudio = new Audio('correct-answer.wav');
var wrongAudio = new Audio('wrong-answer.wav');

function checkAnswer(inputElement, answer) {
  var userAnswer = inputElement.value.trim();
  var feedbackElement = inputElement.nextElementSibling;
  if (userAnswer !== ""){
    if (!feedbackElement || !feedbackElement.classList.contains("feedback")) {
      feedbackElement = document.createElement("div");
      feedbackElement.classList.add("feedback");
      inputElement.parentNode.appendChild(feedbackElement);
    }

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      feedbackElement.className = "feedback correct";
      feedbackElement.textContent = "Richtig!";
      if(audio == true){
        correctAudio.play();
      }
    } else {
      feedbackElement.className = "feedback incorrect";
      feedbackElement.textContent = "Falsch! Die richtige Antwort lautet: " + answer;
      if(audio == true){
        wrongAudio.play();
      }
    }
  }else{
    console.log("Empty")
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
function mute(){
  // Hole das Icon-Element
  const icon = document.querySelector('.swap-button2 i');
  // Überprüfe, ob das Icon aktuell auf "mute" steht
  if (icon.classList.contains('fa-volume-mute')) {
     // Ändere das Icon zu "volume-up"
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
    audio = true;
  } else {
    // Ändere das Icon zurück zu "mute"
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    audio = false;
  }
}
