
const playButton = document.getElementById('play-btn')
const welcomeContainer = document.getElementById('welcome-container')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')

let shuffledQuestions=0
let currentQuestionIndex


playButton.addEventListener('click', playQuiz)

/**
 * Play quiz function starts the quiz after the play button is pressed. It removes the play button and add the questions and answer section
 */
function playQuiz() {
    playButton.classList.add('hide')
    welcomeContainer.classList.add('hide')
    questionContainer.classList.remove('hide')


    //shuffledQuestions=questions.sort(() => Math.random() - .5)  // gets a randow question
    shuffledQuestions=questions[Math.floor(Math.random()*questions.length)];
    //currentQuestionIndex = 0  //set to 0 as we are starting on first question
    getQuestion();
}


function getQuestion() {
    questionElement.innerText=shuffledQuestions.question
    // showQuestion(shuffledQuestions[currentQuestionIndex]);

}

// function showQuestion(question) {
//     questionElement.innerText=question.question

// }





// Questions and answers

const questions = [{

    question: "What state is know as The golden State",
    answers: [{
        text: "California",
        correct: true
    },
    {
        text: "Arizona",
        correct: false
    },
    {
        text: "Florida",
        correct: false
    },
    {
        text: "Hawaii",
        correct: false
    }

    ]
},

{
    question: 'What state is know as "The Grand Canyon State"',
    answers: [{
        text: "Arizona ",
        correct: true
    },
    {
        text: "Arkansas",
        correct: false
    },
    {
        text: "Alaska",
        correct: false
    },
    {
        text: "Alabama",
        correct: false
    }

    ]
},

{
    question: 'What state is know as "The Last Frontier state"',
    answers: [{
        text: "Alaska",
        correct: true
    },
    {
        text: "Hawaii",
        correct: false
    },
    {
        text: "Kentucky",
        correct: false
    },
    {
        text: "Missouri",
        correct: false
    }

    ]
},

{
    question: 'What state is know as "The Empire State"',
    answers: [{
        text: "New York",
        correct: true
    },
    {
        text: "Rhoe Island",
        correct: false
    },
    {
        text: "Tennessee",
        correct: false
    },
    {
        text: "Utah",
        correct: false
    },

    ]
},
];




