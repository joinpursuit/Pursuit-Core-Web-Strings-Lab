// 1. `console.log` the first character of a string.

let str = "pursuit"

console.log(str[0]);

// 2. console.log the length of a string.

console.log(str.length);

// 3. `console.log` the last character of any string. 

console.log(str[str.length - 1]);

// 4. Create a code block that takes a single string variable, and returns a copy of 
// the string with the last letter capitalized.

let lastCap = str.slice(0, str.length-1) + str[str.length-1].toUpperCase()
console.log(lastCap);

// 5. Create a drEvil code block that will take a single number variable, and log 
// the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. 

let num = 1000000
let amount = num + " dollars"
console.log(amount);

if (num >= 1000000) {
    console.log(amount + " (pinky)");
}

// 6. Create a`verbing` code block.It should take a single string variable.If its length is 
// at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case 
// it should add 'ly' instead.If the string length is less than 3, it should leave it unchanged.

function verbing(str) {
    if (str.slice(-3) === "ing") {
        return str += "ly"
    } else if (str.length > 2) {
        return str += "ing"  
    } else if (str.length < 3) {
        return str
    }
}

console.log(verbing("box"));
console.log(verbing("train"));
console.log(verbing("swimming"));


// 7. Create a`withoutLast` code block that takes a single string variable, and returns a copy 
// of the string without the last word.

let str1 = "Hello there! How are you?"
let split = str1.split(' ')
let newStr = split.slice(0, -1)
let withoutLast = newStr.join()
console.log(withoutLast);
