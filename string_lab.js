//#1 console.log(); the first character of a string
 let name = "ohidur"
 console.log(name[0]);
//#2 log the lenth of the string

console.log(name.length);
//#3 log the last character of any string.

console.log(name[name.length-1]);

/*
4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
*/

console.log(name);
console.log(name[0].toUpperCase());

/*

5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
*/
let amount = 10
if (amount >= 1000000){
console.log( amount + " dollars (pinky)");
}
else {
  console.log(amount);
}

/*
6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
*/

let verb ="wav";
if (verb.length >= 3){
  console.log(verb+"ing");
}
else if (verb.length < 3){
  console.log(verb+"ly");
}
else {
  console.log(verb);
}
/*

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.
*/

let str ="Test String"
let str1 = str.split(" ").slice(0,-1).join(" ");
console.log(str1);

//BOUNUS
/*
1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
print/log the result
*/
let hash = "Hello";
 if(hash.length % 2 === 1){
   console.log(hash + "#");
 }
 else {
   console.log(hash);
 }
