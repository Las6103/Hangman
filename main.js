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

// Create and randomize words
function randomWords() {
  let words = [
    "cheeto",
    "keyboard",
    "mascot",
    "cellphone",
    "valorant",
    "array",
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
}
randomWords();
