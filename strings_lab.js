// # String Exercises
//
// 1. console.log the first character of a string.

let string = `Michael`;
console.log(string[0]);

// 2. console.log the length of a string.

console.log(string.length);

// 3. console.log the last character of any string.

console.log(string[string.length - 1]);

// 4. Create a code block that takes a single string variable,
// and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```

function lastLetterUpperCase(string) {
  return string.slice(0, string.length - 1) + string[string.length - 1].toUpperCase();
}

console.log(lastLetterUpperCase(string));

// 5. Create a drEvil code block that will take a single number varaible,
// and log the '<variablbeAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

function drEvil(amount) {
  amount === 1000000 ? console.log(amount + ` dollars (pinky)`) : console.log(amount + ` dollars`);
}

drEvil(1000000);
drEvil(100000);
drEvil(10000);
drEvil(1000);

// 6. Create a `verbing` code block. It should take a single string variable.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead. If the string length is less than 3,
// it should leave it unchanged.
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

function verbing(i) {
  i.length >= 3 ?
    i.slice(-3) === `ing` ? console.log(i += `ly`) : console.log(i += `ing`) :
    console.log(i);
}

verbing(`box`);
verbing(`train`);
verbing(`swimming`);
verbing(`go`);
verbing(string);

// 7. Create a `withoutLast` code block that takes a single string variable,
// and returns a copy of the string without the  last word.

function withoutLastWord(i) {
  for (let j = i.length - 1; j >= 0; j--) {
    if (i[j] === ` ` || i[j] === `\n`) {
      return k = i.slice(0, j);
      break;
    }
  }
}

console.log(withoutLastWord(`hello`));
console.log(withoutLastWord(`hello world`));
console.log(withoutLastWord(`hello world its`));
console.log(withoutLastWord(`hello world its a`));
console.log(withoutLastWord(`hello world its a nice`));
console.log(withoutLastWord(`hello world its a nice day`));
console.log(`hello world its a nice day`);

function withoutLastLetter(i) {
  return k = i.slice(0, i.length - 1);
}

console.log(withoutLastLetter(string));
