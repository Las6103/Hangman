// Global Variables
let mistake = document.querySelector("#mistakes");

let numOfMistakes = parseInt(mistake.innerText);
console.log(numOfMistakes);

let answer = document.querySelector(".answer");
let selectedChars = [];
let originalWord = [];

// Create and randomize words
let words = ["cheeto", "keyboard", "mascot", "cellphone", "valorant", "array"];
let word = words[Math.floor(Math.random() * words.length)];

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

let selectors = document.querySelectorAll(".keys");
// Grab EVT Target
selectors.forEach((selector) => {
  selector.addEventListener("click", function (evt) {
    evt.preventDefault();
    let clicked = evt.target.innerText;
    selectedChars.push(clicked);
    renderHangmanWord();
  });
});

// Game Logic
function renderHangmanWord() {
  let charsArr = word.split("");
  answer.innerHTML = null;
  let mistakeFlag = false;
  
  mistake.innerHTML = numOfMistakes;
  charsArr.forEach((char) => {
    let span = document.createElement("span");
    originalWord = char;
    
    if (selectedChars.includes(char)) {
      span.innerText = char;
      // WHAT HAPPENS WHEN YOU WIN???
    } else {
      span.innerText = " _ ";
      // WHAT HAPPENS WHEN YOU PRESS WRONG LETTER???
      mistakeFlag = true;
    }
    answer.appendChild(span);
  });

  if (mistakeFlag) {
    numOfMistakes++;
  }
  if (numOfMistakes >= 6) {
    alert("game over");
  }
}
renderHangmanWord();
