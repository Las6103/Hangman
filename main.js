// Global Variables
let mistake = document.querySelector("#mistakes");
let answer = document.querySelector(".answer");
let guessedWords = [];
let selectedChars = [];
let originalWord = null;

// Create and randomize words
let words = ["cheeto", "keyboard", "mascot", "cellphone", "valorant", "array"];
let word = words[Math.floor(Math.random() * words.length)];


function renderHangmanWord() {
  let chars = word.split("");
  answer.innerHTML = null;
  chars.forEach((char) => {
    let span = document.createElement("span");
    originalWord = char;
    if (selectedChars.includes(char)) {
      span.innerText = char;

    } else {
      span.innerText = " _ ";
    
    }
    answer.appendChild(span);
  });
}
renderHangmanWord();

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

selectors.forEach((selector) => {
  selector.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log(evt.target.innerText);
    let clicked = evt.target.innerText;
    selectedChars.push(clicked);
    renderHangmanWord();
  });
});
