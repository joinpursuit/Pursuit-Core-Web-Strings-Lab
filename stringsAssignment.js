// 1. console.log the first character of a string.
let var1 = "String";
console.log(var1[0]);

// 2. console.log the length of a string.
let var2 = "StringTwo";
console.log(var2.length);

// 3. console.log the last character of any string.
let var3 = "String3";
console.log(var3[var3.length - 1]);

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
let var4 = "StringFour";
function capitalizeLastLetter(word) {
  console.log(word[word.length - 1].toUpperCase() )
}
capitalizeLastLetter(var4);


// 5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
let var5 = 5;
function drEvil(amount) {
  if(amount >= 1000000) {
    console.log(amount + " dollars" + " (pinky)");
  } else if(amount < 1000000) {
    console.log(amount);
  } else { console.log("Not a valid input"); }
}
drEvil(var5);


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
let var6 = "helloing";
function verbing(theWord) {
  let temp = theWord
  if(theWord.length >= 3)  {
    let temp = theWord.slice(-3);
    if(temp != "ing") {
      console.log(theWord + "ing")
    } else {
      console.log(theWord + 'ly');
    }
    //console.log(theWord + "ly");
  } else if(theWord.length <= 3) {
    console.log(theWord);
  }
}
verbing(var6);
// let x = var6.slice(-3);
// console.log(x);


// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last
let var7 = "string";
function withoutLast(stringVariable) {
  let temp = var7.slice(0, -1);
  console.log(temp);
}
withoutLast(var7);
