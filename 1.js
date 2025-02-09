// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.


//  natural numbers are numbers that are greater than zero, and whole numbers are all positive numbers including zero.

let sum = 0;

for ( let i = 0; i < 1000; i++) {
    if ( i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);