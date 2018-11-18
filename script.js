// style the heathen fake primes
function styleFalsePrime() {
  // get full range
  const children = document.querySelectorAll(".tile");

  children.forEach(child => {
    child.style;
  });
  /*
  https://stackoverflow.com/a/24768853
  incredible plain js way of 'stealing' non DOM information from CSS psuedo-content
*/
  // Get the color value of .element:before
  var color = window
    .getComputedStyle(document.querySelector(".element"), ":before")
    .getPropertyValue("color");

  // Get the content value of .element:before
  var content = window
    .getComputedStyle(document.querySelector(".element"), ":before")
    .getPropertyValue("content");

  // tar them with black paint!
  // console.log(children[heretic]);
}

// analyse a given n by modulo division
// function dividePrime(i) {
// }

// let heretics = [],
//   zealots = [];

// analyse if n is a prime number
// function isPrime(n) {
//   // bit-test if n is odd: expect 1
//   // use trial division squareroot as limit
//   // let limit = Math.sqrt(n);

//   // this loops modulo of a single prime
//   for (let j = 2; j <= n; j++) {
//     if (j % n === 0) {
//       return `${j} ${n}`;
//       // heretics.push(n);
//     } else {
//       // zealots.push(n);
//       return n;
//     }
//   }
// }

// const isPrime = n => {
//   let j;
//   const s = Math.sqrt(n);
//   for (j = 2; j <= s; j++) {
//     if (n % j === 0) {
//       return false;
//     }
//     // return `TRUE: ${n}`;
//     return n !== 1 && n !== 0;
//   }
// };

window.onload = function() {
  // evaulate ints from 2 up to n
  // for (let i = 2; i < 2021; i++) {
  // get returned prime value
  // const rPrime = isPrime(i);
  // bit-check if odd
  // if ((i & 1) === 1) {
  // trial division check if prime
  // console.log(isPrime(i));
  // }
  // }
  // console.log(heretics, heretics.length);
  // console.log(zealots, zealots.length);
};
