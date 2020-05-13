let mistake = document.querySelector("#mistakes");
let answer = document.querySelector(".answer");
let selectors = document.querySelectorAll(".keys");
let guessedWords = [];

// Create and randomize words
let words = ["cheeto", "keyboard", "mascot", "cellphone", "valorant", "array"];
let word = words[Math.floor(Math.random() * words.length)];

<<<<<<< HEAD
=======
function wordToGuess() {
  let chars = word.split("");
  chars.forEach((char) => {
    let span = document.createElement("span");
    let originalWord = char;
    span.innerText = ' _ ';
    answer.appendChild(span);
  });
}
wordToGuess();

>>>>>>> parent of 4387387... created Hangman Logic
// Create Buttons
function createButtons() {
  let buttons = document.querySelector(".buttons");
  let keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  keys.forEach((key) => {
    let letters = document.createElement("button");
    letters.innerHTML = key;
    letters.classList.add("keys");
    buttons.appendChild(letters);
  });
}
createButtons();

// Game Logic
function renderHangmanWord() {
  let chars = word.split("");
  answer.innerHTML = null;
  chars.forEach((char) => {
    let span = document.createElement("span");
    originalWord = char;
    if (selectedChars.includes(char)) {
      span.innerText = char;
      // WHAT HAPPENS WHEN YOU WIN???
    } else {
      span.innerText = " _ ";
      // WHAT HAPPENS WHEN YOU PRESS WRONG LETTER???
    }
    answer.appendChild(span);
  });
}
renderHangmanWord();

// Grab EVT Target
selectors.forEach((selector) => {
  selector.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log(evt.target.innerText);
    let clicked = evt.target.innerText;
    selectedChars.push(clicked);
    renderHangmanWord();
  });
});
