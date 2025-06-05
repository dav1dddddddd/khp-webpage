const questions = [
    {
        question: "what kind of necklace is my favorite to wear? no looking!",
        answers: [
            { text: "pearl", correct: false},
            { text: "cross", correct: true},
            { text: "chain", correct: false},
            { text: "all of the above", correct: false},
        ]
    },
    {
        question: "what's my favorite daytime activity?",
        answers: [
            { text: "gaming", correct: true},
            { text: "spending time with you", correct: true},
            { text: "coding", correct: false},
            { text: "hanging out with friends", correct: true},
        ]
    },
    {
        question: "what's my favorite food?",
        answers: [
            { text: "medium-rare steak", correct: false},
            { text: "ramen", correct: false},
            { text: "sundubu", correct: true},
            { text: "pho", correct: false},
        ]
    },
    {
        question: "what's my favorite top to wear?",
        answers: [
            { text: "hoodies", correct: true},
            { text: "sweaters", correct: false},
            { text: "cropped shirts", correct: true},
            { text: "sweatshirt", correct: false},
        ]
    },
    {
        question: "favorite color to wear?",
        answers: [
            { text: "full-spectrum photonic saturation event", correct: false},
            { text: "blue", correct: false},
            { text: "absence-of-photonic-vibration chromatic nullity", correct: true},
            { text: "cream", correct: false},
        ]
    },
    {
        question: "freebie! what word do we say only when we're fully honest?",
        answers: [
            { text: "beaver", correct: false},
            { text: "tyrannosaurus rex", correct: false},
            { text: "giraffe", correct: false},
            { text: "poodle", correct: true},
        ]
    },
    {
        question: "another freebie! what am i the goat at!??!?!?!?!?!?!??!?!?!?!?",
        answers: [
            { text: "being jobless", correct: false},
            { text: "league uh legends", correct: false},
            { text: "cooking eggs", correct: false},
            { text: "all of the above", correct: true},
        ]
    },
    {
        question: "what is the highest v-grade i have climbed?",
        answers: [
            { text: "v9", correct: false},
            { text: "v8", correct: true},
            { text: "v7", correct: false},
            { text: "v6", correct: false},
        ]
    },
    {
        question: "my highest rank on anime tower defense leaderboard?",
        answers: [
            { text: "rank 1", correct: true},
            { text: "top 5", correct: false},
            { text: "top 10", correct: false},
            { text: "top 25", correct: false},
        ]
    },
    {
        question: "last one! dream car...",
        answers: [
            { text: "mclaren", correct: false},
            { text: "corvette", correct: false},
            { text: "tesla roadster", correct: false},
            { text: "supra", correct: true},
        ]
    },
];

const questionObj = document.getElementById("question");
const containerObj = document.getElementById("quiz-container");
const answersObj = document.getElementById("answer-button");
const nextObj = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionObj.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answersObj.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextObj.style.display = "none";
    while (answersObj.firstChild) {
        answersObj.removeChild(answersObj.firstChild);
    }
    containerObj.style.bottom = "12.5%"
}

function selectAnswer(e) {
    const selectedObj = e.target;
    const isCorrect = selectedObj.dataset.correct == "true";
    if (isCorrect) {
        selectedObj.classList.add("correct");
        nextObj.innerHTML = "wow!";
        score++;
    }
    else {
        selectedObj.classList.add("incorrect");
        nextObj.innerHTML = "WTF";
    }
    Array.from(answersObj.children).forEach(button => {
        button.disabled = true;
    });
    nextObj.style.display = "block";
}

function showScore() {
    resetState();
    const numberIncorrect = (questions.length - score);
    if (score < questions.length) {
        questionObj.innerHTML = `WTF. U GOT ${numberIncorrect} WRONG? RETRY OR WE'RE DONE. 😠 (btw, u have to answer every question correctly)`;
        nextObj.innerHTML = "RUN IT BACK";
        nextObj.style.display = "block";
        containerObj.style.bottom = "12.5rem";
    }
    if (score == questions.length) {
        questionObj.innerHTML = "WOW UR SO EPIC! U JUST EARNED URSELF";
        nextObj.innerHTML = "yes";
        nextObj.style.display = "block";
        containerObj.style.bottom = "17.5rem";
    }
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextObj.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();

function hide() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
}