//# String Exercises

//1. console.log the first character of a string.
console.log("1._________________________________");

let string = "Hello";

console.log(string[0]);


//2. console.log the length of a string.
console.log("2._________________________________");

console.log(string.length);

//3. console.log the last character of any string.

console.log("3._________________________________");

console.log(string[string.length - 1]);

//4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
//

console.log("4._________________________________");

let capitalized = string.slice(0,(string.length - 1)) + string[string.length - 1].toUpperCase();

console.log(capitalized);


// 5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
//

console.log("4._________________________________");

let balance = 50;
let dream = 1000000;
let drEvil = dream - balance + " dollars (pinky)";

if (balance < dream) {
  console.log(drEvil);
}


// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
// For example:
//
// ```js
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// // =>  'go'
// ```
//

console.log("6._________________________________");

let word = "train";
let verbing = word + "ing";
let adj = word + "ly";

if (word.slice(word.length - 3) === "ing") {
  console.log(adj);
} else if (word.length < 3) {
  console.log(word);
} else {
  console.log(verbing);
}


// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last


console.log("7._________________________________");

let x = "I'm happy to be learning JavaScript";
let words = x.split(" ");
let withOutLast = words.slice(0, words.length - 1);

console.log(withOutLast);
