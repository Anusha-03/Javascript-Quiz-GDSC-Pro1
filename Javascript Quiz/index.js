const quizDB = [{
    question: "Q1. Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<js>",
    d: "<scripting>",
    ans: "ans2",
}, 
{
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "The <body> section",
    c: "Both the <head> and the <body> section",
    d: "none of the above",
    ans: "ans3"
}, 
{ 
    question: "What is the correct way to write a JavaScript array?",
    a: "var colors = 'red','green','blue'",
    b: "var colors = ('red','green','blue');",
    c: "var colors = {'red','green','blue'};",
    d: "var colors = ['red','green','blue'];",
    ans: "ans4"
}, 
{
    question: "How can you add a single line comment in a JavaScript?",
    a: "//This is a comment",
    b: "/*This is a comment*/",
    c: "<!--This is a comment-->",
    d: "<This is a comment>",
    ans: "ans1"
}, 
{
    question: "How do you write 'Hello World' in an alert box?",
    a: "msg('Hello World');",
    b: "alertBox('Hello World');",
    c: "console('Hello World');",
    d: "alert('Hello World');",
    ans: "ans4"
}, 
{
    question: "How do you create a function in JavaScript?",
    a: "function:myFunction()",
    b: "function myFunction()",
    c: "function = myFunction()",
    d: "function myFunction",
    ans: "ans2"
}, 
{
    question: "How do you call a function named 'myFunction'?",
    a: "call function myFunction()",
    b: "myFunction()",
    c: "call myFunction()",
    d: "function myFunction();",
    ans: "ans2"
}, 
{
    question: "How to write an IF statement in JavaScript?",
    a: "if i==5 then",
    b: "if i=5 then",
    c: "if (i==5)",
    d: "if i=5",
    ans: "ans3"
}, 
{
    question: "How does a WHILE loop start?",
    a: "while(i<=10)",
    b: "while i=1 to 10",
    c: "while(i<=10; i++)",
    d: "while [i<=10]",
    ans: "ans1"
}, 
{
    question: "How does a FOR loop start?",
    a: "for(i<=5; i++)",
    b: "for(i=1 to 5)",
    c: "for(i=0; i<=5; i++)",
    d: "for(i=0; i<=5)",
    ans: "ans3"
}, 
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked) {
            answer = curAnsElem.id;
        }
        return answer;
    });
return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}



submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3>👑 You scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()">Play Again!</button>
        `; 

        showScore.classList.remove('scoreArea');
    }
});