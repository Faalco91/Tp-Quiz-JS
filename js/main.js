let currentQuestion = 0;
let userAnswers = JSON.parse(localStorage.getItem("reponses")) || Array(quizData.length).fill(null);

const accueil = document.getElementById("accueil");
const quiz = document.getElementById("quiz");
const resultat = document.getElementById("resultat");

const questionText = document.getElementById("questionText");
const choixZone = document.getElementById("options");
const progression = document.getElementById("progression");
const scoreFinal = document.getElementById("scoreFinal");
const resume = document.getElementById("resume");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

const elements = {
  questionText, choixZone, progression, prevBtn, nextBtn, submitBtn, resume, scoreFinal
};

startBtn.addEventListener("click", () => {
  accueil.style.display = "none";
  quiz.style.display = "flex";
  afficherQuestion(currentQuestion, userAnswers, elements);
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    afficherQuestion(currentQuestion, userAnswers, elements);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    afficherQuestion(currentQuestion, userAnswers, elements);
  }
});

submitBtn.addEventListener("click", () => {
  quiz.style.display = "none";
  resultat.style.display = "flex";
  afficherResultats(userAnswers, elements);
});

restartBtn.addEventListener("click", () => {
  localStorage.removeItem("reponses");
  userAnswers = Array(quizData.length).fill(null);
  currentQuestion = 0;
  resultat.style.display = "none";
  accueil.style.display = "flex";
});
