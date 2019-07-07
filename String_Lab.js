
// 1. console.log the first character of a string.
let string = "Lesson";
console.log("Printing the first character of the word ", string);
console.log(string[0]);
console.log("---------------------------------- \n");


// 2. console.log the length of a string.
console.log(`The lenght of ${string} is ${string.length}`)
console.log("---------------------------------- \n");


// 3. console.log the last character of any string.
console.log(`The last character of the word ${string} is ${string[string.length - 1]}`);
console.log("---------------------------------- \n");


// 4. Create a code block that takes a single string variable, and returns
// a copy of the string with the last letter capitalized. For example:

// 'jimmy'
// => 'jimmY'
console.log(`Capitalizing the last character of the word ${string} :`);
console.log("Methode1 : ")
console.log(string.slice(0, string.length - 1) + string[string.length - 1].toUpperCase());
console.log("Methode2 : ")
console.log(`${string}\b${string[string.length - 1].toUpperCase()}`);
console.log("---------------------------------- \n");


// 5 Create a drEvil code block that will take a single number varaible, and log
// the ' dollars', your code block should add '(pinky)' at the end of
// the amount if it's 1 million. For example:

// let amount = 10
// => 10 dollars
// let amount = 1000000
// =>  1000000 dollars (pinky)
let amount = 1000000;
if (amount === 1000000) {
console.log(`Amount of money :\n\t ${amount} dollars (pinky) ... Wish I had that in my bank account :)`);
} else if (amount === 1 || amount === 0) {
console.log(`Amount of money :\n\t ${amount} dollar`);
} else console.log(`Amount of money :\n\t ${amount} dollars`);
console.log("---------------------------------- \n");


// 6. Create a verbing code block. It should take a single string variable.
// If its length is at least 3, it should add 'ing' to its end, unless it already
// ends in 'ing', in which case it should add 'ly' instead. If the string
// length is less than 3, it should leave it unchanged. For example:

// verbing('box')
// => 'boxing'
// verbing('train')
// => 'training'
// verbing('swimming')
// =>  'swimmingly'
// verbing('go')
// =>  'go'
let verb = "train";
console.log(`Verbing the word ${verb} : `)
if (verb.length >=3) {
   if (verb.slice(verb.length - 3) === "ing") {
      console.log(verb + "ly");
   } else console.log(verb + "ing");
} else console.log(verb);
console.log("---------------------------------- \n");


// 7. Create a withoutLast code block that takes a single string variable,
//and returns a copy of the string without the last character
console.log(`Removing the last character from the string : ${string}`);
console.log("Methode1 : " + string.slice(0,string.length - 1));

let withoutLast = "";
for (let i = 0; i < string.length - 1; i++){
  withoutLast += string[i];
}
console.log(`Methode2 : ${withoutLast}`);
console.log(`Methode3 : ${string}\b `);

//let last = string[string.length - 1];
//console.log("Methode4 : ", string.split(last));

let str3 = "Had some hard time with this part"
console.log(`\nRemoving the last word from the string : ${str3}`);
let space = str3.lastIndexOf(" ");

if (space === -1){
  console.log(`${str3} is a one word string, this operation wont affect it`);
} else {
  withoutLast = str3.slice(0, space);
  console.log(withoutLast);
}
console.log("---------------------------------- \n");


// Bonus1:
//Write a code block that adds a "#" to a string if the string has an odd
//number of characters, otherwise leave it as is. print/log the result
//Examples:
//let name = 'taq'  // should log 'taq#'
//let name2 ='john' // should log 'john'

let name = "Taq"  // should log 'taq#' name2 ='john' // should log 'john'

if (name.length % 2 === 1){
  console.log(`${name} has ${name.length} characters (odd number) so it will become: `);
  name += "#";
  console.log(name);
} else console.log(`${name} has ${name.length} characters (eveb number) so it wont change:\n${name}`);
console.log("---------------------------------- \n");


//Bonus2:
//Write a code block that prints/logs the 3rd to last characters of a string.
//If the string is not at least 3 characters long then log an error message.
let sentence = "Doing something", word = "";

if (sentence.length >= 3){
  word = sentence.slice(-3)
  console.log(`The 3 last characters of ${sentence} are ${word}`);
} else console.log(`Error : ${sentence} is too short for this operation`);
console.log("---------------------------------- \n");


//Bonus3:
//Write a code block that prints/logs whether a string x starts with a vowel.

let x = "Engine";

switch (x[0].toLowerCase()){
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "y":
    console.log(`${x} starts with the vowel ${x[0]}`);
    break;
  default :
    console.log(`${x} doesn't start with a vowel`);
}
console.log("---------------------------------- \n");


//Bonus4:
//Write a code block that given two strings, str1 and str2,
//prints/logs a new string with str2 mashed into the middle of str1
//Examples:
//For str1 = 'help' and str2 = 'me'. Your program should log 'hemelp'
//For str1 = 'hello' and str2 = 'world'. Your program should log 'helworldlo'

let str1 = "hello", str2 = "world"; //Your program should log 'hemelp'
let part1 = str1.slice(0, Math.ceil(str1.length / 2));
let part2 = str1.slice(- Math.floor(str1.length / 2));
console.log(`${str2} mashed into the middle of ${str1} gives : ${part1}${str2}${part2}`);
console.log("---------------------------------- \n");


//Bonus5:
//Write a code block that prints/logs whether a string x has at least one vowel in it.
//Examples:
//For x = 'taq'. Your program should log 'taq' has a vowel'
//For x = 'dfghjkl'. Your program should log 'dfghjkl' does not have a vowel'
//For x = '' Your program should log '' does not have a vowel'
let y2 = "dfghjkl";
let lowY = y2.toLowerCase();

let a = lowY.search("a");
let e = lowY.search("e");
let i = lowY.search("i");
let o = lowY.search("o");
let u = lowY.search("u");
let y = lowY.search("y");

if (a === -1 && e === -1
      && i === -1 && o === -1
      && u === -1 && y === -1){
        console.log(`${y2} doesn't contain any vowel`);
} else console.log(`${y2} contain at least a vowel`);
console.log("---------------------------------- \n");
