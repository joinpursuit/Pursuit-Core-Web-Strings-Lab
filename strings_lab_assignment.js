// 1. console.log the first character of a string.
console.log("----#1------");
let str = "karen"
console.log(str[0]);

// 2. console.log the length of a string.
console.log("----#2------");
console.log(str.length);

// //3. console.log the last character of any string.
console.log("----#3------")
console.log(str[str.length-1]);

//4. Create a code block that takes a single string variable, and
//returns a copy of the string with the last letter capitalized.
//For example:

// ```js
// 'jimmy'
// // => 'jimmY'
// ```
console.log("----#4------");
let lastCap = str[str.length-1].toUpperCase();
// console.log(lastCap);
console.log(str.slice(0,4) + lastCap);

 // 5. Create a drEvil code block that will take a single number varaible,
 //and log the '<variablbeAmount> dollars', your code block should add '(pinky)'
 //at the end of the amount if it's 1 million. For example:
 //
 // ```js
 // let amount = 10
 // // => 10 dollars
 // let amount = 1000000
 // // =>  1000000 dollars (pinky)
console.log("----#5------")
let amount = 1000000
let num = 100;
  if (num<amount) {
    console.log(num + " dollars")
  } else {
    console.log(num + " dollars (pinky)")
  }

//6. Create a `verbing` code block. It should take a single string variable.
//If its length is at least 3, it should add 'ing' to its end, unless it
//already ends in 'ing', in which case it should add 'ly' instead. If the
//string length is less than 3, it should leave it unchanged.
//For example:

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
console.log("------#6----")
const shortChar = "ing";
const endChar = "ly";
let verbing = "go"
  if (verbing.endsWith("ing")) {
    console.log(verbing+endChar);
  } else if (verbing.length >= 3) {
    console.log(verbing+shortChar);
  } else {
    console.log(verbing);
  }

  //7. Create a `withoutLast` code block that takes a single string variable,
  //and returns a copy of the string without the  last
  console.log("----#7-----");
  let withoutLast = "It's all good";
  let x = withoutLast.slice(0, -4);
  console.log(x);
