window.addEventListener("DOMContentLoaded", init);

//Globals

//Available levels
const levels = {
  easy: 6,
  medium: 4,
  hard: 1
};

//to change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const lvlSelection = document.querySelector("#lvlSelection").value;

const words = [
  "hat",
  "river",
  "lucky",
  "sujit",
  "rohan",
  "naruto",
  "sasuke",
  "jaypark",
  "establishment",
  "hero",
  "javascript",
  "learning",
  "echo",
  "nutrition",
  "prospective",
  "integration",
  "establishment",
  "bayern",
  "realmadrid",
  "revolver",
  "bizon",
  "assaultrifle",
  "generate",
  "statue",
  "cocktail",
  "stubborn"
];

//init the game
function init() {
  //show number of seconds
  seconds.innerHTML = currentLevel;

  //load word from array
  showWord(words);

  //start matching on word input
  wordInput.addEventListener("input", startMatch);

  //call countdown every second
  setInterval(countdown, 1000);

  //check game status
  setInterval(checkStatus, 50);
}

//pick and show random words
function showWord(words) {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);

  //output a random word
  currentWord.innerHTML = words[randIndex];
}

//Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    score++;
    showWord(words);
    wordInput.value = "";
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "correct";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//countdown timer
function countdown() {
  //make sure time is not run out
  if (time > 0) {
    //decrement
    time--;
  } else if (time === 0) {
    //Game is Over
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
