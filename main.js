// Global Variables
let mistake = document.querySelector("#mistakes");
let numOfMistakes = parseInt(mistake.innerText);
let answer = document.querySelector(".answer");
let winner = document.querySelector(".winner");
let selectedChars = [];


// Create and randomize words
let words = ["cheeto"];
let word = words[Math.floor(Math.random() * words.length)];

// Images
const gallowsImages = [
  "/css/First-Image.png",
  "/css/Second-Image.png",
  "/css/Third-Image.png",
  "/css/Fourth-Image.png",
  "/css/Fifth-Image.png",
  "/css/Sixth-Image.png",
  "/css/Dead.png",
];

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
    "i",
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

/**
 * Adds Click Event To All Buttons
 */
function eventListener() {
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
}

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
  console.log(charsArr);
  answer.innerHTML = null;
  charsArr.forEach((char) => {
    let span = document.createElement("span");
    span.classList.add("hangmanword");
    if (selectedChars.includes(char)) {
      span.innerText = char;
      counter();
    } else {
      span.innerText = " _ ";
    }
    answer.appendChild(span);
  });
}

function counter() {
  let count = 0;
  console.log(count);
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
    reset();
  }
  mistake.innerHTML = numOfMistakes;
  renderImage(numOfMistakes);
}

// Declares Outcome and Resets Game
function reset() {
  // winner.classList.remove('hidden');
  if (confirm("Game Over, you're trash!")) {
    numOfMistakes = 0;
    let activateKeys = document.querySelectorAll(".keys");
    activateKeys.forEach((activateKey) => {
      activateKey.disabled = false;
    });
    // winner.classList.add('hidden');
    word = words[Math.floor(Math.random() * words.length)];
    selectedChars = [];
    renderHangmanWord();
  } else {
    console.log("Click on OK to reset");
  }
}

/**
 * Updates image off of mistake count
 * @param {number} numOfMistakes
 */
function renderImage(numOfMistakes) {
  let image = document.querySelector(".gallow");
  let index = numOfMistakes;
  image.src = gallowsImages[index];
}

createButtons();
eventListener();
renderHangmanWord();

console.log(word);
console.log(selectedChars);
