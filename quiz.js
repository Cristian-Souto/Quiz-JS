const questions = [
  {
    question: '¿Cuál es la capital de Francia?',
    options: ['Paris', 'Londres', 'Roma', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: "¿Cuántos planetas hay en nuestro sistema solar?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
    correctAnswer: "Amazonas"
  },
  {
    question: "¿Cuántas estrellas hay en el cielo?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3"
  }
]

//score 
let score = 0;

//indice actual de la pregunta 
let currentQuestionIndex = 0;

//funcion para cargar las preguntas
const loadQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];
  const questionTitle = document.getElementById("question");
  questionTitle.innerText = currentQuestion.question;
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.classList.add("option");
    optionButton.innerText = option;
    optionButton.addEventListener("click", () => selectAnswer(option));
    optionsContainer.appendChild(optionButton);
  })
}

//funcion para chequear la respuesta
const selectAnswer = (selectedOption) => {

  const currentQuestion = questions[currentQuestionIndex];
  selectedOption === currentQuestion.correctAnswer ? score++ : null;
  //cargar la siguiente pregunta
  currentQuestionIndex++;
  //si ya no hay preguntas, mostrar el puntaje
  currentQuestionIndex < questions.length ? loadQuestion() : showScore();
}

//funcion para ver el resultado 
const showScore = () => {
  const scoreResult = document.getElementById("result");
  scoreResult.innerText = `Tu puntaje es ${score} de ${questions.length} preguntas`;
  document.getElementById("options-container").innerHTML = "";
  document.getElementById("question").innerHTML = "Quiz Terminado!!";
  document.getElementById("submit-btn").style.display = "none";
}

//funcion para verificar la respuesta
const checkAnswer = () => {
  const selectedOption = document.querySelector("button:focus");
  if (selectedOption) {
    selectAnswer(selectedOption.innerText);
  }
}
//iniciar el quiz
loadQuestion();





