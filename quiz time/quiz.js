let quizQNA = [{
        question: "what is my name?",
        a: "shiv",
        b: "kushal",
        c: "abhishek",
        d: "poonam",
        correcta: "c"
    },
    {
        question: "what is my father's name?",
        a: "shiv",
        b: "kushal",
        c: "abhishek",
        d: "poonam",
        correcta: "a"
    },
    {
        question: "what is my mom's name?",
        a: "shiv",
        b: "kushal",
        c: "abhishek",
        d: "poonam",
        correcta: "d"
    },
    {
        question: "what is my friend's name",
        a: "shiv",
        b: "kushal",
        c: "abhishek",
        d: "poonam",
        correcta: "b"
    },
    {
        question: "what is my age?",
        a: 23,
        b: 24,
        c: "both of the above",
        d: "non of the above",
        correcta: "d"
    }
]
let quiz = document.getElementById("quiz")
const answerEl = document.querySelectorAll(".answer")
const question = document.getElementById("questions");
const a_que = document.getElementById("a_text");
const b_que = document.getElementById("b_text");
const c_que = document.getElementById("c_text");
const d_que = document.getElementById("d_text");

const submit = document.getElementById("submit")

let currentquiz = 0;
let score = 0;
let deselect = () => {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}


let changeq = () => {
    deselect();
    let currentque = quizQNA[currentquiz]
    question.innerHTML = currentque.question;
    a_que.innerHTML = currentque.a;
    b_que.innerHTML = currentque.b;
    c_que.innerHTML = currentque.c;
    d_que.innerHTML = currentque.d;

}
let getSelected = () => {
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }

    })
    return answer
}







changeq();
submit.addEventListener("click", () => {
        let ans = getSelected();
        if (ans) {
            if (ans === quizQNA[currentquiz].correcta) {
                score++
                console.log(score);
            }
        }


        currentquiz++
        deselect();

        if (currentquiz < quizQNA.length) {
            changeq();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizQNA.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>`;
        }
    })
    // console.log(quizQNA);





// const quizData = [{
//         question: "What is the most used programming language in 2019?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "JavaScript",
//         correct: "d",
//     },
//     {
//         question: "Who is the President of US?",
//         a: "Florin Pop",
//         b: "Donald Trump",
//         c: "Ivan Saldano",
//         d: "Mihai Andrei",
//         correct: "b",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hypertext Markup Language",
//         b: "Cascading Style Sheet",
//         c: "Jason Object Notation",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         a: "1996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },
// ];

// const quiz = document.getElementById("quiz");
// // const answerEls = document.querySelectorAll(".answer");
// const questionEl = document.getElementById("questions");
// const a_text = document.getElementById("a_text");
// const b_text = document.getElementById("b_text");
// const c_text = document.getElementById("c_text");
// const d_text = document.getElementById("d_text");
// const submitBtn = document.getElementById("submit");

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz() {
//     deselectAnswers();

//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerText = currentQuizData.question;
//     a_text.innerText = currentQuizData.a;
//     b_text.innerText = currentQuizData.b;
//     c_text.innerText = currentQuizData.c;
//     d_text.innerText = currentQuizData.d;
// }

// function getSelected() {
//     let answer = undefined;

//     answerEls.forEach((answerEl) => {
//         if (answerEl.checked) {
//             answer = answerEl.id;
//         }
//     });

//     return answer;
// }

// function deselectAnswers() {
//     answerEls.forEach((answerEl) => {
//         answerEl.checked = false;
//     });
// }

// submitBtn.addEventListener("click", () => {
//     // check to see the answer
//     const answer = getSelected();

//     if (answer) {
//         if (answer === quizData[currentQuiz].correct) {
//             score++;
//         }

//         currentQuiz++;
//         if (currentQuiz < quizData.length) {
//             loadQuiz();
//         } else {
//             quiz.innerHTML = `
//                 <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

//                 <button onclick="location.reload()">Reload</button>
//             `;
//         }
//     }
// });