
const playButton = document.getElementById('play-btn')
const welcomeContainer =document.getElementById('welcome-container')
const questionContainer =document.getElementById('question-container')


playButton.addEventListener('click', playQuiz)

/**
 * Play quiz function
 */
 function playQuiz() {
    playButton.classList.add('hide')
    welcomeContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
}

 