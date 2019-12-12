// # String Exercises
//// 1. console.log the first character of a string.
console.log('---1');
let string = 'word';
console.log(string[0]);

// 2. console.log the length of a string.
console.log('---2');
console.log(string.length);

// 3. console.log the last character of any string.
console.log('---3');
console.log(string[string.length - 1]);

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
console.log('---4');
let name = 'Rogue';
name = name.slice(0, name.length - 1) + name.slice(name.length - 1).toUpperCase();
console.log(name);

// 5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
console.log('---5');
let amount = 1000000;
if (amount.length < 7 || amount > 1000000) {
  console.log(amount + ' dollars');
} else if (amount[0] > 1) {
  console.log(amount + ' dollars');
} else {
  console.log(amount + ' dollars (pinky)');
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
console.log('---6');
let test = 'chain';
if (test.length < 3) {
  console.log(test);
} else if (test.endsWith('ing')) {
  console.log(test + 'ly');
} else {
  console.log(test + 'ing');
}

// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.

console.log('---7');
let word = 'The dog and cat are best of friends.';
last = word.lastIndexOf(' ');
console.log(word.substr(0, last) + '.');