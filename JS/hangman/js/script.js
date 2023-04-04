// import the words array
import { words } from './words.mjs';

// select and store the tile container
const tilesContainer = document.getElementById('tiles');
// select and store the blanks container
const blanksContainer = document.getElementById('blanks');
// select and store the message
const message = document.getElementById('message');
// select and store the image
const image = document.getElementById('help-me');
// select and store the start button
const startButton = document.getElementById('start');

// listen for click event on start button
startButton.addEventListener('click', playGame);

function playGame() {
  startButton.remove();
  drawTiles();

  // select a random word from the array
  const word = words[Math.floor(Math.random() * words.length)];
  console.log(word);

  // create array from word
  const wordArray = word.split('');

  // draw the blank tiles
  drawBlanks(wordArray);

  message.innerText = 'Select a letter.'
  enableTiles(wordArray)

}

/**
 * Draws the tiles of the alphabet onto the
 * game board.
 */
function drawTiles() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const char of chars) {
    const tile = `<button class="in-play tile hoverable grid">${char}</button>`;
    tilesContainer.innerHTML += tile;
  }
}

/**
 * Draws blank tiles from the word array.
 * @returns {String}
 */
function drawBlanks(wordArr = []) {
  for (let i = 0; i < wordArr.length; i++) {
    const tile = `<button class="tile grid" id="${wordArr[i] + i}"></button>`;
    blanksContainer.innerHTML += tile;
  }
}

/**
 * Adds an 'onclick' listener to each tile still in play.
 */
function enableTiles(wordArr) {
  const tiles = document.getElementsByClassName('in-play');
  for (const tile of tiles) {
    tile.addEventListener('click', function() {
      checkTile(tile, wordArr)
    });
  }
}

/**
 * Helper function to determine correct guess.
 * @param {String} char - The player's guess (lowercase).
 * @param {Array} wordArr - The array of chars belonging to the random word.
 * @returns {Boolean} True or false.
 */
function isCorrect(char, wordArr) {
  if (wordArr.includes(char)) {
    return true;
  }
  return false;
}

/**
 *
 * @param {HTMLDivElement} tile - The div the player clicked on.
 * @param {Array} wordArr - The array of chars belonging to the random word.
 * @returns {String} "correct or incorrect."
 */
function checkTile(tile, wordArr = []) {
  // disable the clicked tile
  tile.setAttribute('disabled', 'true');
  // remove hover state styles
  tile.classList.remove('hoverable', 'in-play');
  // developer feedback
  console.log(`tile: ${tile.innerText}, word: ${wordArr.join('')}`);

  // change tile character to lowercase
  const char = tile.innerText.toLowerCase();

  // if character is correct, color the tile green
  if (isCorrect(char, wordArr)) {
    tile.classList.add('correct');

    // reveal correct character(s) on blank(s)
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === char) {
        const blank = document.getElementById(`${char}${i}`);
        blank.innerText = char.toUpperCase();
      }
    }
    return 'correct';
  } else {
    // character is incorrect, color the tile red
    tile.classList.add('incorrect');
    return 'incorrect';
  }
}
