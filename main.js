// Global Variables
let mistake = document.querySelector("#mistakes");
let numOfMistakes = parseInt(mistake.innerText);
let answer = document.querySelector(".answer");
let winner = document.querySelector(".winner");
let loser = document.querySelector('.loser');
let resetButton = document.querySelector('.reset');
let selectedChars = [];


// Create and randomize words
let words = ["cheeto", "valorant", "visitor", "mousepad", "keyboard", "macbook", "snowboard", "clipboard"];
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
  answer.innerHTML = null;
  charsArr.forEach((char) => {
    let span = document.createElement("span");
    if (selectedChars.includes(char)) {
      span.innerText = char;
      span.classList.add("hangmanword");
    } else {
      span.innerText = " _ ";
    }
    answer.appendChild(span);
  });
  let hangmanSpan = document.querySelectorAll('.hangmanword');
      checkForWinner(hangmanSpan, charsArr);
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
    checkForLoser();
  }
  mistake.innerHTML = numOfMistakes;
  renderImage(numOfMistakes);
}

resetButton.addEventListener('click', reset);

// check for winner
function checkForWinner(hangmanSpan, charsArr) {
  if (hangmanSpan.length === charsArr.length) {
    winner.classList.remove('hidden');
    resetButton.classList.remove('hidden');
  }
}

function checkForLoser() {
loser.classList.remove('hidden');
resetButton.classList.remove('hidden');
}

// Declares Outcome and Resets Game
function reset() {
    numOfMistakes = 0;
    let activateKeys = document.querySelectorAll(".keys");
    activateKeys.forEach((activateKey) => {
      activateKey.disabled = false;
    });
    winner.classList.add('hidden');
    loser.classList.add('hidden');
    resetButton.classList.add('hidden');
    word = words[Math.floor(Math.random() * words.length)];
    selectedChars = [];
    renderHangmanWord();
  // } 
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


