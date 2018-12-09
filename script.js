// HIGH LEVEL NEW ASTRACTION PLAN:
/*
listeners pass parameters 'pink' or 'pinky' and true (for addClass) or false (for removeClass)
listener code sorts adds from removes, and both listeners pass to the SAME loop function
which runs a forEach loop over tiles.
*/

const tiles = document.querySelectorAll(".tile");

// false means inactive: default colors. true means add pink/y colors
let firstPink = 0, tile2counter = false,
  tile3counter = false;

// pink/y tile listeners
tiles[1].addEventListener("click", () => {
  // handles first click paint bug
  if (firstPink === 0) {
    firstPink++;
    tiles[1].click();
  }
  togglePinks("pink");
});

tiles[2].addEventListener("click", togglePinks.bind(this, "pinky"));

function togglePinks(color) {
  console.log(color, tile2counter);

  // run loop once and sort within
  tiles.forEach(tile => {

    // check for a tile 3 call
    if (color === "pinky") {
      if (tile3counter === true) {
        // remove pinky class to all tiles
        tile.classList.remove("pinky");
        // now reset tile3counter logic
        tile3counter = false;
      } else if (tile3counter === false) {
        // add pinky class to all tiles
        tile.classList.add("pinky");
        // now reset tile3counter logic
        tile3counter = true;
      }
    }

    // check a for tile 2 call
    if (color === "pink") {
      if (tile2counter === true) {
        // remove pink class to all tiles
        tile.classList.remove("pink");
        // now reset tile2counter logic
        tile2counter = false;
      } else if (tile2counter === false) {
        // add pink class to all tiles
        tile.classList.add("pink");
        // now reset tile2counter logic
        tile2counter = true;
      }
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