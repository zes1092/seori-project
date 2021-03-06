// accepts a base and and a length as arguments 
// return an array representing a sequence that contains length elements 
// first element of the sequence is always the base 
// susbsequent elements can be generated by doubling the base of the previous

function doubleSequence(base, length) { 
    let arr = []; 

    let previous = base; 
    for (let i = 0; i < length; i++) { 
        arr.push(previous); 
        previous *= 2; 
    }

    return arr; 
}

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]
