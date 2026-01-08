# Projects to be made :- 
``` JS

1. Interactive Quiz App (basic) - DOM manipulation, events, conditionals

2. Expense Tracker (intermediate) - Local storage, arrays, objects

3. Weather Dashboard (advanced) - API calls, async/await, error handling

``` 



# P1 :-  
``` JS
DOM Selection - How to grab HTML elements

// By ID
const element = document.getElementById('quiz-container');

// By class (returns collection)
const buttons = document.getElementsByClassName('option-btn');

// Modern way (recommended) - works like CSS selectors
const title = document.querySelector('.quiz-title');
const allOptions = document.querySelectorAll('.option');
2. Event Listeners - Making things interactive

button.addEventListener('click', function() {
    // code runs when button is clicked
});

// Or with arrow function
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
3. Changing Content & Styles

element.textContent = 'New text here';      // Change text
element.innerHTML = '<strong>Bold</strong>'; // Change HTML
element.style.backgroundColor = 'blue';      // Change CSS
element.classList.add('active');             // Add class
element.classList.remove('active');          // Remove class
4. Arrays & Objects - Storing quiz data

const questions = [
    {
        question: "What does JS stand for?",
        options: ["JavaScript", "JavaSource", "JustScript"],
        correct: 0  // index of correct answer
    }
];

// Accessing
questions[0].question;  // "What does JS stand for?"
questions[0].options[1]; // "JavaSource"
5. Conditionals - Checking answers

if (selectedAnswer === correctAnswer) {
    score++;
} else {
    // wrong answer logic
} 
```