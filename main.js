// Global Variables
let mistake = document.querySelector("#mistakes");
let numOfMistakes = parseInt(mistake.innerText);
let answer = document.querySelector(".answer");
let selectedChars = [];

// Create and randomize words
let words = ["cheeto"];
let word = words[Math.floor(Math.random() * words.length)];

/**
 * Creates buttons and adds to DOM
 */
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

/**
 * Adds Click Event To All Buttons
 */
let selectors = document.querySelectorAll(".keys");
selectors.forEach((selector) => {
  selector.addEventListener("click", function (evt) {
    evt.preventDefault();
    let clicked = evt.target.innerText;
    let disable = evt.target;
    pushClicked(clicked);
    disableKey(disable);
    renderHangmanWord();
    renderHangmanMistakes(clicked);
  });
});

/**
 * Push clicked to array
 * @param {string} clicked
 */
function pushClicked(clicked) {
  selectedChars.push(clicked);
}

/**
 * Disable Key Once Clicked
 * @param {HTMLElement} disable
 */
function disableKey(disable) {
  disable.disabled = true;
}

/**
 * Checks onclick if clicked key is included in word array
 */
function renderHangmanWord() {
  let charsArr = word.split("");
  answer.innerHTML = null;
  charsArr.forEach((char) => {
    let span = document.createElement("span");
    if (selectedChars.includes(char)) {
      span.innerText = char;
    } else {
      span.innerText = " _ ";
    }
    answer.appendChild(span);
  });
}

/**
 * Generate Mistakes
 * @param {string} clicked
 */
function renderHangmanMistakes(clicked) {
  if (!word.includes(clicked)) {
    numOfMistakes++;
  }
  if (numOfMistakes >= 6) {
    alert("game over");
  }
  mistake.innerHTML = numOfMistakes;
}
