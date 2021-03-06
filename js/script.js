const game = [
  {
    question: "What's the name of the ship",
    answer: "serenity",
    difficulty: 0
  },
  {
    question: "What's the shorthand name of the captain of the serenity",
    answer: "mal",
    difficulty: 0
  },
  {
    question: "What's the first name of the first mate of the serenity",
    answer: "zoe",
    difficulty: 0
  },
  {
    question: "What's the nickname of the pilot of the serenity",
    answer: "wash",
    difficulty: 0
  },
  {
    question:
      "What's the first name of companion who leases a shuttle from mal",
    answer: "inara",
    difficulty: 0
  },
  {
    question: "What's the first name of the hired gun on the serenity",
    answer: "jayne",
    difficulty: 0
  },
  {
    question:
      "What's the name of the valley the majority of the first episode takes place in",
    answer: "serenity",
    difficulty: 0
  },
  {
    question:
      "What's the nickname, easily confused as her real name, of the serenity's engineer mechanic",
    answer: "kaylee",
    difficulty: 0
  },
  {
    question: "What's the last name of the Shepard onboard of the serenity",
    answer: "book",
    difficulty: 0
  },
  {
    question:
      "What's the first name of the mentally unstable psychic weapon on board",
    answer: "river",
    difficulty: 0
  }
];

// delay single
// setTimeout(function() {}, 3000)

// Returns the API and stores it in an Array of Objects
const url =
  "https://trivia.propernerd.com/api/questions?limit=10&random=true&category=firefly";

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

// Targeting the flip css element
// .flip-card:hover .flip-card-inner {
//   transform: rotateY(180deg);
// }

// setTimeout(function() {}, 1000)

let flip = document.querySelector(".flip-card-inner");

const correct = "Correct!";
const incorrect = "Incorrect!";

let score = document.querySelector("#score");

// Keeps the count of how many questions the user answered correctly
let scoreCount = 0;

// Function to flip the card over
function flipQuestion() {
  flip.style.transform = `rotateY(180deg)`;
}

// Function to flip the card back over to the front
function flipBack() {
  setTimeout(function() {
    flip.style.transform = `rotateY(0deg)`;
  }, 1500);
}

/* This is the API code Will be Implemented after new api is completed
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
            console.log(`Question Number ${questionNum}`)

            if (value == fireflyArr[questionNum].answer  && questionNum < (fireflyArr.length - 1)) {
                answerResult.innerText = correct;
                theAnswer.innerText = "Great Job!";
                questionNum++;
                console.log(fireflyArr[questionNum]);
                console.log(fireflyArr[questionNum].question)
                console.log(fireflyArr[questionNum].answer)
                questionBox.innerText = fireflyArr[questionNum].question;
                formInput.value = null;
                console.log(value)
                scoreCount++;
                score.innerText = `Score: ${scoreCount}`;



            } else if (value != fireflyArr[questionNum].answer  && questionNum < (fireflyArr.length - 1)){
                answerResult.innerText = incorrect;
                theAnswer.innerText = `The Correct Answer Was : ${fireflyArr[questionNum].answer}`;
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
            else {

            }
        });
    });
    */

let fireflyArr = game;
let questionNum = 0;

console.log(fireflyArr[questionNum]);
console.log(fireflyArr[questionNum].question);
console.log(fireflyArr[questionNum].answer);
questionBox.innerText = fireflyArr[questionNum].question + "?";

form.addEventListener("submit", evt => {
  evt.preventDefault();

  let value = formInput.value;
  value = value.toLowerCase();
  console.log(value);
  console.log(`Question Number ${questionNum}`);

  if (
    value == fireflyArr[questionNum].answer &&
    questionNum < fireflyArr.length - 1
  ) {
    answerResult.innerText = correct;
    theAnswer.innerText = "Great Job!";
    questionNum++;
    flipQuestion();
    console.log(fireflyArr[questionNum]);
    console.log(fireflyArr[questionNum].question);
    console.log(fireflyArr[questionNum].answer);
    questionBox.innerText = fireflyArr[questionNum].question + "?";
    formInput.value = null;
    console.log(value);
    scoreCount++;
    // This is if you want the score count to be changed
    // score.innerText = `Score: ${scoreCount}`;
    flipBack();
  } else if (
    value != fireflyArr[questionNum].answer &&
    questionNum < fireflyArr.length - 1
  ) {
    answerResult.innerText = incorrect;
    theAnswer.innerText = `The Correct Answer Was : ${fireflyArr[questionNum].answer}`;
    questionNum++;
    // update dom for new question
    flipQuestion();

    console.log(fireflyArr[questionNum]);
    console.log(fireflyArr[questionNum].question);
    console.log(fireflyArr[questionNum].answer);
    questionBox.innerText = fireflyArr[questionNum].question;
    //clean the input form
    formInput.value = null;
    console.log(value);

    flipBack();
  } else {
    questionBox.innerText = `Game Over!\nYou got ${scoreCount} out of 10 Correct\nHit Refresh on the browser window to play again!`;
    formInput.value = null;
    flipBack();
  }
});
