<<<<<<< HEAD
// NEW IDEA: WEB AUDIO / WEB CAM --> EMOJI-CANNON OF UDP TERMINAL DATA
// fits with new IG idea: UDP_EMOJI_CANNON / asciicannon / UDP_emoji
// wierd new idea: reveal primes on page on.load with some sort of
// one time loop changing visibility: hidden of each RED prime??
// fukk idk kinda comfusimg

const tiles = document.querySelectorAll('.tile'),
  floor = document.querySelector('.floor'),
  col = document.getElementById('col');

// catch earliest input to validate and handle exceptions
col.addEventListener('keydown', e => {
  // initial value of DOM element
  const v1 = e.target.innerHTML,
    reg = /^\d+$/;
  // if set to false, an allowed non-numeric input was used
  let isInt = true;

  // console.log(e.cancelable); // true

  if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    // allow only these special keys
    isInt = false;
  }

  // safety check if #col is about to be empty (representing zero columns)
  if (v1.length === 1 && (e.key === 'Backspace' || e.key === 'Delete')) {
    console.log(
      'not fixed, doesnt detect any repeat cases...is v1 wrong? is preventDefault affecting value states? can i force update v1 or select it differently? should i not be using length?'
    );
    floor.setAttribute('style', 'grid-template-columns: repeat(1, 1fr) !important;');
  }

  // if ANY OTHER KEYDOWN OCCURS: run regex blocker
  if (isInt === true && reg.test(e.key) === false) {
    console.log('isInt = false', e.key);
    // prevents event bubbling to 'input' below
    e.preventDefault();
  } else {
    console.log('isInt = true', e.key);
  }
});

// if input reaches this later listener and is less than n columns, apply currently displayed value
col.addEventListener('input', () => {
  console.log('reaches input');
  // why does console.log(e.key); return undefined here? is 'input' not technically a keyboardEvent?
  // is the event being blocked by regex tests preventDefault? might looking into bubbling help? (ughhhh)

  // get users value to apply
  const colInt = parseInt(col.innerHTML);

  // if, for sanity, user input is within an arbitrary n apply column change
  if (colInt < 151) {
    // hardcode set columns (due to media queries and !importants in css file... cleanup !importants !!)
    floor.setAttribute('style', `grid-template-columns: repeat(${colInt}, 1fr) !important;`);
  }
});

// prime numbers 2 and 3 are speshal - give them pink/y power/s

// odd means add pink/y colors
// even means remove pink/y colors
let pinkC = 0,
  pinkyC = 0;

// pink tile listener
tiles[1].addEventListener('click', () => {
  // bit test if even --> add
  if ((pinkC & 1) === 0) {
    toggleTiles('pink', 'add');
  } else {
    // is odd --> remove
    toggleTiles('pink', 'remove');
  }
  pinkC++;
});

// pinky tile listener
tiles[2].addEventListener('click', () => {
  // bit test if even --> add
  if ((pinkyC & 1) === 0) {
    toggleTiles('pinky', 'add');
  } else {
    // is odd --> remove
    toggleTiles('pinky', 'remove');
  }
  pinkyC++;
});

// generic tile loop accepts a color[class name] and an action
function toggleTiles(color, action) {
  tiles.forEach(tile => {
    if (action === 'add') {
      tile.classList.add(color);
    }
    if (action === 'remove') {
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
=======
// NEW IDEA: WEB AUDIO / WEB CAM --> EMOJI-CANNON OF UDP TERMINAL DATA
// fits with new IG idea: UDP_EMOJI_CANNON / asciicannon / UDP_emoji
// wierd new idea: reveal primes on page on.load with some sort of
// one time loop changing visibility: hidden of each RED prime??
// fukk idk kinda comfusimg

// .. IDEA: Write a listener for #col >

// NEXT IDEA: change 'base' to 'col' / 'column' b/c it base is a lie lmao

const tiles = document.querySelectorAll(".tile"),
  col = document.getElementById("col"),
  floor = document.querySelector(".floor");

// catch earliest input to validate and handle exceptions
col.addEventListener("keydown", e => {
  // initial value of DOM element
  const v1 = e.target.innerHTML,
    reg = /^\d+$/;
  // if set to false, an allowed non-numeric input was used
  let isInt = true;

  // console.log(e.cancelable); // true

  if (e.key === "Backspace" || e.key === "Delete") {
    // allow special keys: delete, backspace, ...?
    isInt = false;
  }

  // safety check if #col is about to be empty (representing zero columns)
  if (v1.length === 1 && isInt === false) {
    floor.setAttribute(
      "style",
      "grid-template-columns: repeat(1, 1fr) !important;"
    );
  }

  // if ANY OTHER KEYDOWN OCCURS: run regex blocker
  if (isInt === true && reg.test(e.key) === false) {
    console.log("isInt = false", e.key);
    // prevents event bubbling to 'input' below
    e.preventDefault();
  } else {
    console.log("isInt = true", e.key);
  }
});

// if input reaches this later listener and is less than n columns, apply currently displayed value
col.addEventListener("input", () => {
  console.log("reaches input");
  // why does console.log(e.key); return undefined here? is 'input' not technically a keyboardEvent?
  // is the event being blocked by regex tests preventDefault? might looking into bubbling help? (ughhhh)

  // get users value to apply
  const colInt = parseInt(col.innerHTML);

  // if, for sanity, user input is within an arbitrary n apply column change
  if (colInt < 151) {
    // hardcode set columns (due to media queries and !importants in css file... cleanup !importants !!)
    floor.setAttribute(
      "style",
      `grid-template-columns: repeat(${colInt}, 1fr) !important;`
    );
  }
});

// prime numbers 2 and 3 are speshal - give them pink/y power/s

// odd means add pink/y colors
// even means remove pink/y colors
let pinkC = 0,
  pinkyC = 0;

// pink tile listener
tiles[1].addEventListener("click", () => {
  // bit test if even --> add
  if ((pinkC & 1) === 0) {
    toggleTiles("pink", "add");
  } else {
    // is odd --> remove
    toggleTiles("pink", "remove");
  }
  pinkC++;
});

// pinky tile listener
tiles[2].addEventListener("click", () => {
  // bit test if even --> add
  if ((pinkyC & 1) === 0) {
    toggleTiles("pinky", "add");
  } else {
    // is odd --> remove
    toggleTiles("pinky", "remove");
  }
  pinkyC++;
});

// generic tile loop accepts a color[class name] and an action
function toggleTiles(color, action) {
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
>>>>>>> f842146f3fa58992fba65baab5c85e1f462cd6ef
