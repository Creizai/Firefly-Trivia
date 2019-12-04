// Returns the API and stores it in an Array of Objects
const url = "https://trivia.propernerd.com/api/questions?limit=10&random=true&category=firefly";

// targeting the form to attach the event handler
const form = document.querySelector("form");

// targetting the form input to get the value to compare to API answer
let formInput = form.querySelector("input.guess");

// targetting the elements I want to update
let questionBox = document.querySelector("#question");

// targeting the result
let answerResult = document.querySelector("#answerResult");

// Targetting the Answer
let theAnswer = document.querySelector("#theAnswer");

let correct = "Correct!";
let incorrect = "Incorrect!";

let fireflyArr = [];

fetch(url)
    .then(res => res.json())
    .then(res => {

        let value = formInput;
        let fireflyArr = res;
        let questionNum = 0;


        questionBox.innerText = fireflyArr[questionNum].question;

        console.log(fireflyArr[questionNum]);
        console.log(fireflyArr[questionNum].question)
        questionBox.innerText = fireflyArr[questionNum].question;

        button.addEventListener("click", evt => {
            evt.preventDefault();
            if (value === fireflyArr[questionNum].answer) {
                answerResult.innerText = correct;
                theAnswer.innerText = "Great Job!";
            } else {
                answerResult.innerText = incorrect;
            }

        });

    });
