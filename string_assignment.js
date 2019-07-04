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

let h = "I'm happy to be learning JavaScript";
let words = h.split(" ");
let withOutLast = words.slice(0, words.length - 1);
let combined = withOutLast.join(" ");


console.log(combined);

//BONUS QUESTIONS
//
//1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is. print/log the result
//
// Examples:
//
// let name = 'taq'  // should log 'taq#'
// let name2 ='john' // should log 'john'


console.log("Bonus Question 1._________________________________");

let name = "Bob";

if (name.length % 2 !== 0) {
  name += "#";
  console.log(name);
} else {
  console.log(name);
}


// 2. Write a code block that prints/logs the 3rd to last characters of a string. If the string is not at least 3 characters long then log an error message.
//  Hint
// It should work for strings of any length.
// Examples, for variables:
//
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'// Should log 'Taq'

console.log("Bonus Question 2._________________________________");

let example = "This is the start of a great career, Tim";

if (example.length >= 3) {
  console.log(example.slice(example.length - 3));
} else {
  console.log("This string is too short.");
}


// 3. Write a code block that prints/logs whether a string x starts with a vowel.
//  Extra
// Make it case insensitive

console.log("Bonus Number 3._________________________________");

let x = "Alpha";
let vowel = "aeiouAEIOU";
let y = "yY";

if (vowel.includes(x[0])) {
  console.log("This word begins with a vowel");
} else if (y.includes(x[0])) {
  console.log("Y is tricky because sometimes it's a vowel and sometimes it isn't!");
} else {
  console.log("This word begins with a consonent");
}


//4. Write a code block that given two strings, str1 and str2, prints/logs a new string with str2 mashed into the middle of str1
// Examples:
//
// For str1 = 'help' and str2 = 'me'. Your program should log 'hemelp'
//
// For str1 = 'hello' and str2 = 'world'. Your program should log 'helworldlo'

let str1 = "Good";
let str2 = "Morning";
let middle = Math.floor(str1.length / 2);

console.log(str1.slice(0, middle) + str2 + str1.slice(middle, str1.length));

// 5. Write a code block that prints/logs whether a string x has at least one vowel in it.
// Examples:
//
// For x = 'taq'. Your program should log 'taq' has a vowel'
// For x = 'dfghjkl'. Your program should log 'dfghjkl' does not have a vowel'
// For x = '' Your program should log '' does not have a vowel'
//  Extra & Hint:
// Hint: Abstain from using loops. Explore string methods.
//
// Extra: Make it case insensitive. So that for x = 'TAQ' it should log 'TAQ' has a vowel


let w = "Chance";
let v = "aeiouAEIOU";

if (v.includes(w[0, (w.length - 1)])) {
  console.log(`${w} has a vowel.`);
} else {
  console.log(`${w} does not have a vowel`);
}
