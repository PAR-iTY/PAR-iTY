// remove even indexes
// function noEvens(list) {
// }

// style the heathen fake primes
function styleFalsePrime() {
  const primeParent = document.querySelector(".floor");
  // get LIVE node list [has pseudos]
  let children = primeParent.childNodes; // length is 4043 now but will update with node list
  const sLength = children.length; // is 4043 as a static int
  // however children[sLength - 1] = .primer (children indexed from zero, length is not)

  // for ()
  let i = 1;

  // const childArray = Array.from(children);
  // childArray.pop();
  // console.log(childArray);
  // while (i <= sLength) {
  //   // if i is even
  //   if ((i & 1) === 0) {
  //     console.log(i); // returns evens
  //   }
  //   // if i is odd
  //   if ((i & 1) === 1) {
  //     console.log(i); // returns odds
  //   }
  //   i++;
  // }
  // test remove an element from live node list
  // children[0].parentNode.removeChild(children[0]);

  // console.log(children);
  // children.forEach(child => {

  /*
  https://stackoverflow.com/a/24768853
  incredible way of 'stealing' non DOM information from CSS psuedo-content
*/
  // Get the color value of .element:before
  // var color = window
  //   .getComputedStyle(document.querySelector(".element"), ":before")
  //   .getPropertyValue("color");

  // Get the content value of .element:before
  // var content = window
  //   .getComputedStyle(document.querySelector(".element"), ":before")
  //   .getPropertyValue("content");

  // tar them with black paint!
  // console.log(children[heretic]);
}

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

window.onload = function () {

  // bit-check if odd
  // if ((i & 1) === 1) {
  styleFalsePrime();
  // }
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
};
