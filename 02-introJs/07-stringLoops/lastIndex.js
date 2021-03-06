// Write a function lastIndex that takes in a string and a character. 
// The function should return the last index where the character can be found in the string.

function lastIndex(str, char) { 
    let count = 0; 
    for (let i = str.length - 1; i >= 0; i--) { 
        if (str[i] === char) { 
            count = i; 
        }
    }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
