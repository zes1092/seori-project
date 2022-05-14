// returns true if number is prime

function isPrime(num) { 
    // if num less than 2 
    if (num < 2) { 
        return false; 
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) { 
            return false; 
        }
    }
    return true; 
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
