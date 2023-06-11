
const playButton = document.getElementById('play-btn')
const welcomeContainer = document.getElementById('welcome-container')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton =document.getElementById('next-btn')
const scoreBoardContainer = document.getElementById('scoreboard-container')
const score = document.getElementById('score')
const incorrectScore = document.getElementById('incorrect')
const timerContainer =document.getElementById('timer')

const answerButtoneOne =document.getElementById('answer-btn-1')
const answerButtoneTwo=document.getElementById('answer-btn-2')
const answerButtonThree =document.getElementById('answer-btn-3')
const answerButtonfour =document.getElementById('answer-btn-4')

let shuffledQuestions
let currentQuestionIndex





playButton.addEventListener('click', playQuiz)

nextButton.addEventListener('click' ,() => {
    currentQuestionIndex++;
    getQuestion();
})

/**
 * Play quiz function starts the quiz after the play button is pressed. It removes the play button and add the questions and answer section
 */
function playQuiz() {
    playButton.classList.add('hide')
    welcomeContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    scoreBoardContainer.classList.remove('hide-scoreboard')
   //shuffledQuestions=questions[Math.floor(Math.random()*questions.length)];
    shuffledQuestions=questions.sort(() => Math.random() - .5)  // gets a randow question
    currentQuestionIndex = 0  //set to 0 as we are starting on first question
    getQuestion();
    score.innerText=0;
    incorrect.innerText=0;
    countDowntimer ()
}

// Get Question and show question concept from tutorial https://www.youtube.com/watch?v=riDzcEQbX6k

function getQuestion() {
    resetQuestionContainer()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
}

function showQuestion(query) {
    questionElement.innerText=query.query //renamed question to query to make easier to read
    
    //loop through the question answers, get single answer and create a button for each
    query.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('answer-btn','btn');
         if (answer.correct) {
         button.dataset.correct =answer.correct //add data attribute to the correct button
    
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

    })
    
     }
    

function resetQuestionContainer  () {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {   //Loop through all the children for answer button elements and remove first child
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
 

  
}

function selectAnswer(e) {
    const selectedButton = e.target //get the button we clicked on
    const correct = selectedButton.dataset.correct;

    if (correct) {
        incrementScore ()
    }

    else {
        updateIncorrectScore ()
    }

    //set the status for all four buttons
    Array.from(answerButtonsElement.children).forEach(button => {
        setAnswerStatus(button,button.dataset.correct)
       
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1 ){ //check that we are not on last question
        nextButton.classList.remove('hide')
    } else {
        playButton.innerText = 'Play again'
        playButton.classList.remove('hide')
        
    }
    
   
    }


//Color code correct and incorrect answers
function setAnswerStatus (element, correct) {
    clearAnswerStatus (element)
    if (correct) {
        element.classList.add('correct')
        //element.classList.add('blink')
    }
    else {
    element.classList.add('wrong')
   
 }
    }


function clearAnswerStatus (element)  {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


// Concept from Love Maths project
function incrementScore () {
    let oldScore=parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;

}

function updateIncorrectScore () {
    let oldScore=parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
 }



 //countdown timer
 // Concept from turorial https://www.youtube.com/watch?v=GhePFBkdNYk
 function countDowntimer () {
        let currentTime=20;
        quizTimer =setInterval( function () {
            currentTime--;

            if (currentTime >= 0) {
            timerContainer.textContent=currentTime;
            }
            else if (currentTime === 0) {
               
            }
        },
            1000);
        }
          
 
 function resetTimer() {
    clearInterval(quizTimer)
 }


 

// Questions and answers

const questions = [{

    query: "What state is know as The golden State",
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
    query: 'What state is know as "The Grand Canyon State"',
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
    query: 'What state is know as "The Last Frontier state"',
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
    query: 'What state is know as "The Empire State"',
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




