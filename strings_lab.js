// # String Exercises
//
// 1. `console.log` the first character of a string.
let str = "briany"
console.log(str[0]);

// 2. `console.log` the length of a string.
console.log(str.length);

// 3. `console.log` the last character of any string.
console.log(str[str.length - 1]);

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
let name = "thais";
name = name.slice(0,4) + name[4].toUpperCase()
console.log(name);


// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
let num = 1000000
if (num >= 0){
  console.log(num + " dollars")
} else if (num === 1000000){
  console.log(num + " dollars (pinky)" )
}

// 6. Create a `verbing` code block. It should take a single string variable.
//If its length is at least 3, it should add 'ing' to its end,
// unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged.
let verb = "boxing"
if (verb[verb.length - 1] === "g" || verb[verb.length - 1] === "G"){
  console.log(verb + "ly")
} else if(verb.length >= 3) {
  console.log(verb + "ing")
} else {
  console.log(verb)
}


// 7. Create a `withoutLast` code block that takes a single string variable,
//and returns a copy of the string without the last word.
let str2 = "dance all night"
str2 = str2.slice(0,10);
console.log(str2);
