const questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language", "Hyperlink Mark Language"],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        answers: ["Python", "Java", "CSS", "C++"],
        correct: 2
    },
    {
        question: "Which is NOT a programming language?",
        answers: ["HTML", "Java", "Python", "C"],
        correct: 0
    },
    {
        question: "Which language is used for web interactivity?",
        answers: ["JavaScript", "SQL", "PHP", "C"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed!";
        answersEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerText = "Your Score: " + score + "/" + questions.length;
    }
};

loadQuestion();
