let mistake = document.querySelector("#mistakes");
let answer = document.querySelector(".answer");
let guessedWords = [];

// Create and randomize words
let words = ["cheeto", "keyboard", "mascot", "cellphone", "valorant", "array"];
let word = words[Math.floor(Math.random() * words.length)];

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
