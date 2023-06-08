
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




