
let currentQuestion = 0;
const userAns = [];
// const selected = document.querySelector('input[name="tag"]:checked').value;
const scored = document.querySelector(".score");
const result = document.querySelector(".result");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const heading = document.querySelector(".heading");
const questions = [
    {
        question: 'Q1. What is the capital of France?',
        answer: 'Paris',
        options: ['Berlin', 'Paris', 'Rome']
    },
    {
        question: 'Q2. Which planet in our solar system is known for being the largest?',
        answer: 'Jupiter',
        options: ['Earth', 'Saturn', 'Jupiter']
    },
    {
        question: 'Q3. What is the chemical symbol for gold?',
        answer: 'Au',
        options: ['Ag', 'Au', 'Hg']
    }
]


function show(questionInx){
    const question = document.querySelector(".question");
    const options = document.querySelector(".options");
    question.innerText = questions[questionInx].question;
    options.innerHTML = "";

    questions[questionInx].options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<label><input type="radio" name="tag" value="${option}"> ${option}</label>`;
        options.appendChild(li);
    });

    if(userAns[questionInx]){
        const radios = document.querySelectorAll('input[name="tag"]');
        radios.forEach((radio) => {
            if(radio.value === userAns[questionInx]){
                radio.checked = true;
            }
        })
    }

    if(questionInx == questions.length -1){
        next.innerText = "Submit";
    }else{
        next.innerText = "Next";
    }
}

next.addEventListener("click", () => {
    saveAns();

    if(next.innerText === "Submit"){
        calculateScore();
    }
    else if(next.innerText === "Try again"){
        restartQuiz();
    } else{
        if(currentQuestion < questions.length - 1){
            currentQuestion++;
            show(currentQuestion);
        }
        if(currentQuestion == questions.length){

            result.style.display = "flex";
            questions.style.display = "none";
            options.style.display = "none";
        }
    }

    
});

prev.addEventListener("click", () => {
    if(prev.innerText === "Restart"){
        restartQuiz();
    } else {
        saveAns();
        if (currentQuestion > 0){
            currentQuestion--;
            show(currentQuestion);
        }
    }
});
function saveAns(){
    const selected = document.querySelector('input[name="tag"]:checked');
    if(selected){
        userAns[currentQuestion] = selected.value;
    }
    
}

function restartQuiz(){
    currentQuestion = 0;
    userAns.length = 0;
    prev.innerText = "Previous";
    next.innerText = "Next";
    heading.style.display = "flex";
    document.querySelector(".question").style.display = "block";
    document.querySelector(".options").style.display = "block";
    document.querySelector(".resultPage").style.display = "none";
    result.style.display = "flex";
    show(currentQuestion);
}

function calculateScore(){
    let score = 0;
    for(let i=0; i<questions.length; i++){
        if(userAns[i] == questions[i].answer){
            score++;
        }
    }
    scored.innerText = `You scored is: ${score} out of ${questions.length}`;
    document.querySelector(".question").style.display = "none";
    document.querySelector(".options").style.display = "none";
    
    // Show result page
    heading.style.display = "none";
    prev.innerText = "Restart";
    next.innerText = "Try again";
    document.querySelector(".resultPage").style.display = "flex";
}


show(0);