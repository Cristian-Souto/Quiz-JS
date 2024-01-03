const questions = [
  {
    question: "¿Qué significa HTML?",
    options: ["Hyper Text Markup Language", "High Tech Multi Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "¿Cuál es el lenguaje de programación principal para el desarrollo web?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  },
  {
    question: "¿Qué significa CSS?",
    options: ["Counter Style Sheet", "Computer Style Sheet", "Creative Style Sheet", "Cascading Style Sheet"],
    correctAnswer: "Cascading Style Sheet"
  },
  {
    question: "¿Cuál de las siguientes NO es una biblioteca de JavaScript?",
    options: ["React", "jQuery", "Django", "Angular"],
    correctAnswer: "Django"
  }
];

//score del juego
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
}
//iniciar el el juego
loadQuestion();

//funcion para reiniciar el juego
const resetGame = () => {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
  document.getElementById("submit-btn").style.display = "block";
  document.getElementById("question").innerHTML = "Preguntas";
  document.getElementById("reset-btn").style.display = "none";
  document.getElementById("result").innerHTML = "";
}

//boton de reinicio
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  resetGame();
})

