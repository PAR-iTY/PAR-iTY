// NEW IDEA: WEB AUDIO / WEB CAM --> EMOJI-CANNON OF UDP TERMINAL DATA
// fits with new IG idea: UDP_EMOJI_CANNON / asciicannon / UDP_emoji
// wierd new idea: reveal primes on page on.load with some sort of
// one time loop changing visibility: hidden of each RED prime??
// fukk idk kinda comfusimg

const tiles = document.querySelectorAll(".tile"),
  base = document.getElementById("base"),
  columns = document.getElementById("columns");

// catch earliest input to validate and handle exceptions
base.addEventListener("keydown", e => {
  // initial value of DOM element
  const v1 = e.target.innerHTML,
    reg = /^\d+$/;
  // flag to wait til later to update DOM
  let runReg = true;

  // console.log(e.cancelable); // true

  if (e.key === "Backspace" || e.key === "Delete") {
    // allow special keys: delete, backspace, ...?
    runReg = false;
  }

  // check if #base is about to be empty (representing zero columns)
  if (v1.length === 1 && runReg === false) {
    columns.setAttribute(
      "style",
      "grid-template-columns: repeat(1, 1fr) !important;"
    );
  }

  // if ANY OTHER KEYDOWN OCCURS: run regex blocker
  if (runReg === true && reg.test(e.key) === false) {
    console.log("false! ", e.key);
    e.preventDefault();
  } else {
    console.log("true! ", e.key);
  }
});

// if input reaches this later listener and is less than n columns, apply currently displayed value
base.addEventListener("input", e => {
  console.log(e.key);
  // why does this return undefined? is 'input' not technically a keyboardEvent?
  // is the event being blocked by regex tests preventDefault? might looking into bubbling help? (ughhhh)

  // get users value to apply
  const baseInt = parseInt(base.innerHTML);

  // if within sanity n
  if (baseInt < 151) {
    // hardcode set columns (due to media queries and !importants in css file... cleanup !importants !!)
    columns.setAttribute(
      "style",
      `grid-template-columns: repeat(${baseInt}, 1fr) !important;`
    );
  }
});

// even means not pink/y.
// odd means add pink/y colors
let pinkC = 0,
  pinkyC = 0;

// pink tile listener
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

// pinky tile listener
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

// generic tile loop accepts a color and an action
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
