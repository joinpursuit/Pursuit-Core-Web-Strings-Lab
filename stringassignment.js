// 1. `console.log` the first character of a string.
let str = 'Hey how\'s it going?';
console.log(str[0]);
// 2. `console.log` the length of a string.
let str2 = 'Not bad, how about you?';
console.log(str2.length);
// 3. `console.log` the last character of any string.
let str3 = 'I\'m really looking forward for this summer';
console.log(str3[str3.length - 1]);
// 4. Create a code block that takes a single string variable,
//and returns a copy of the string with the last letter capitalized.
let str4 = 'giselle'
str4 = str4.slice(0,6) + str4[6].toUpperCase()
console.log(str4);
// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
//your code block should add '(pinky)' at the end of the amount if it's 1 million.

for (let variableAmount = 1000005; variableAmount >= 999995; variableAmount -= 5) {
  if (variableAmount === 1000000 ) {
    console.log(variableAmount + ' dollars (pinky)')
  } else {
    console.log(variableAmount + ' dollars')
  }
};

// 6. Create a `verbing` code block. It should take a single string variable.
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
let verb = 'box'
if (verb[verb.length - 1] === 'g' || verb[verb.length - 1] === 'G') {
  console.log(verb + 'ly')
} else if(verb.length >=3) {
  console.log(verb + 'ing')
} else if (verb.length < 3) {
  console.log(verb)
};

// 7. Create a `withoutLast` code block that takes a single string variable,
// and returns a copy of the string without the last word.
let withoutLast = 'I wonder what will happen next';
withoutLast1 = withoutLast.slice(0,25);
console.log(withoutLast1);
