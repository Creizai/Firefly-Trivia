// Returns the API and stores it in an Array of Objects
const url = "https://trivia.propernerd.com/api/questions?limit=10&random=true&category=firefly";

// targeting the form to attach the event handler
const form = document.querySelector("form");

// targetting the form input to get the value to compare to API answer
let formInput = form.querySelector("#guess");

// targetting the elements I want to update
const questionBox = document.querySelector("#question");

// targeting the result
const answerResult = document.querySelector("#answerResult");

// Targetting the Answer
const theAnswer = document.querySelector("#theAnswer");

const correct = "Correct!";
const incorrect = "Incorrect!";

let fireflyArr = [];



fetch(url)
    .then(res => res.json())
    .then(res => {


        let fireflyArr = res;
        let questionNum = 0;

        console.log(fireflyArr[questionNum]);
        console.log(fireflyArr[questionNum].question)
        console.log(fireflyArr[questionNum].answer)
        questionBox.innerText = fireflyArr[questionNum].question;

        form.addEventListener("submit", evt => {
            evt.preventDefault();

            let value = formInput.value;
            console.log(value);

            if (value == fireflyArr[questionNum].answer) {
                answerResult.innerText = correct;
                theAnswer.innerText = "Great Job!";
                questionNum++;
                console.log(fireflyArr[questionNum]);
                console.log(fireflyArr[questionNum].question)
                console.log(fireflyArr[questionNum].answer)
                questionBox.innerText = fireflyArr[questionNum].question;
                formInput.value = null;
                console.log(value)

            } else {
                answerResult.innerText = incorrect;
                theAnswer.innerText = fireflyArr[questionNum].answer;
                questionNum++;
                // update dom for new question
                console.log(fireflyArr[questionNum]);
                console.log(fireflyArr[questionNum].question)
                console.log(fireflyArr[questionNum].answer)
                questionBox.innerText = fireflyArr[questionNum].question;
                //clean the input form
                formInput.value = null;
                console.log(value)
            }
        });
    });