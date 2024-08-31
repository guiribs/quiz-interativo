const questions = [
    {
      question: 'Qual é a capital do Brasil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
      correctAnswer: 2,
    },
    {
      question: 'Qual é o maior planeta do sistema solar?',
      options: ['Terra', 'Vênus', 'Marte', 'Júpiter'],
      correctAnswer: 3,
    },
    {
      question: 'Quantos estados tem o Brasil?',
      options: ['26', '27', '28', '29'],
      correctAnswer: 1,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';
  
      for (let i = 0; i < question.options.length; i++) {
        const option = document.createElement('button');
        option.textContent = question.options[i];
        option.onclick = function() {
          checkAnswer(i);
        };
        optionsElement.appendChild(option);
      }
  
      scoreElement.textContent = `Pontuação: ${score}`;
    } else {
      questionElement.textContent = 'Fim do Quiz';
      optionsElement.innerHTML = '';
      scoreElement.textContent = `Pontuação final: ${score}`;
    }
  }
  
  function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    displayQuestion();
  }
  
  function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
      currentQuestionIndex++;
      displayQuestion();
    }
  }
  
  displayQuestion();
  