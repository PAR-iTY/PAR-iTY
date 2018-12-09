// NEW IDEA: WEB AUDIO / WEB CAM --> EMOJI-CANNON OF UDP TERMINAL DATA
// fits with new IG idea: UDP_EMOJI_CANNON / asciicannon / UDP_emoji

// base changer: validate changed #base value, use isInteger etc
// contenteditable and Document.execCommand() are connected...h
// contenteditable is targeted by the 'input' event!! easy

const tiles = document.querySelectorAll(".tile");

// even means not pink/y.
// odd means add pink/y colors
let pinkC = 0,
  pinkyC = 0;

// pink/y tile listeners
tiles[1].addEventListener("click", () => {
  // bit test if even --> add
  if ((pinkC & 1) === 0) {
    togglePinks("pink", "add");
  } else {
    // is odd --> remove
    togglePinks("pink", "remove");
  }
  pinkC++;
});

tiles[2].addEventListener("click", () => {
  // bit test if even --> add
  if ((pinkyC & 1) === 0) {
    togglePinks("pinky", "add");
  } else {
    // is odd --> remove
    togglePinks("pinky", "remove");
  }
  pinkyC++;
});

function togglePinks(color, action) {
  tiles.forEach(tile => {
    if (action === "add") {
      tile.classList.add(color);
    }
    if (action === "remove") {
      tile.classList.remove(color);
    }
  });
}

// now all primes are correctly highlighted red: JS can use this to avoid recalculating primes
/*
https://stackoverflow.com/a/24768853
incredible way of 'stealing' non DOM information from CSS psuedo-content
*/

// Get the color value of .element:before
// let colors = window
//     .getComputedStyle(document.querySelectorAll(".tile"), ":before")
//     .getPropertyValue("color");

// Get the content value of .element:before
// var content = window
//     .getComputedStyle(document.querySelectorAll(".tile"), ":before")
//     .getPropertyValue("content");

// tar them with black paint!
// console.log(children[heretic]);