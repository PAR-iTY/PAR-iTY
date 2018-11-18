// script lifted from
// http://www.math.com/students/calculators/source/prime-number.htm
// at 18th November 2018

function calculate(form) {

    var num = parseInt(form.number.value);

    if (isNaN(num) || num < 0) {

        form.result.value = (form.number.value + " is not a valid number!  Try again!");

    }

    if (num == 1) {

        form.result.value = ("1 is not prime by definition!");

    }
    if (num == 0) {

        form.result.value = ("0 is not a valid number.");

    }
    if (num == 2) {

        form.result.value = ("2 is a prime number!");
    }



    for (var i = 2; i < num; i++) {

        if (num % i == 0) {

            var prime = "yes";

            form.result.value = (num + " is not prime.  It is divisible by " + i + ".");

            break;

        }

        if (num % i != 0) var prime = "no";

    }

    if (prime == "no") form.result.value = (num + " is prime!");

} 