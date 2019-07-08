// JOSEPH P. PASAOA
//

console.log("1. console.log the first character of a string.");
//
let labber1 = "It's a Wednesday night.";
console.log(labber1);
console.log(labber1[0]);
//
console.log("");


console.log("2. console.log the length of a string.");
//
let labber2 = "It will be midnight soon.";
console.log(labber2);
console.log(labber2.length);
//
console.log("");


console.log("3. console.log the last character of any string.");
//
let labber3 = "Tomorrow will be Thursday.";
console.log(labber3);
console.log(labber3[labber3.length - 1]);
//
console.log("");


console.log("4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized.");
//
let labber4 = "Holidays happen";
//
let minusOne = labber4.length - 1;
console.log((labber4.slice(0,minusOne)) + labber4[minusOne].toUpperCase());
//
console.log("");


console.log("5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars', your code block ");
console.log("should add '(pinky)' at the end of the amount if it's 1 million.");
//
let variableAmount = 1000000;
//
variableAmount === 1000000
  ? console.log(`I demand ${variableAmount} dollars! (pinky)`)
  : console.log(`I demand ${variableAmount} dollars.`);
//
console.log("");


console.log("6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, ");
console.log("unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.");
//
let labber6 = "huggin";
//
if (labber6.length < 3) {
  console.log(`${labber6}`)
} else {
  if (labber6.slice(-3) === "ing") {
    console.log(`${labber6}ly`);
  } else {
    console.log(`${labber6}ing`);
  }
}
//
console.log("");


console.log("7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.");
//
let withoutLast = "Test one two three";
//
let lastSpace = "Multiple words not found.";
for (i = (withoutLast.length - 1); i >= 0; i--) {
  if (withoutLast[i] === " ") {
    lastSpace = i;
    break;
  }
}
console.log(withoutLast.slice(0,lastSpace));
//
console.log("");


console.log('Bonus 1. Write a code block that adds a "\#" to a string if the string has an odd number of characters, otherwise leave it as is.');
console.log('Print\/log the result.');
//
let bonus1 = "An odd string";
//
bonus1.length % 2 === 0
  ? console.log(bonus1)
  : console.log(`${bonus1}#`);
//
console.log("");


console.log("Bonus 2. Write a code block that prints/logs the 3rd to last characters of a string.");
console.log("If the string is not at least 3 characters long then log an error message.");
//
let bonus2 = "This is the second bonus string."; // "Hi"
//
bonus2.length < 3
  ? console.log("Error: Not enough letters!")
  : console.log(bonus2.slice(-3));
//
console.log("");


console.log("Bonus 3. Write a code block that prints/logs whether a string `x` starts with a vowel.");
//
let x = "Adirondack";
//
let xONE = x[0];
//
xONE === "a" || xONE === "e" || xONE === "i" || xONE === "o" || xONE === "u" ||
xONE === "A" || xONE === "E" || xONE === "I" || xONE === "O" || xONE === "U"
  ? console.log(`${x} starts with a vowel!`)
  : console.log( `${x} starts with a consonant.`);
//
console.log("");


console.log("4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`");
//
let bonus4a = "Madagascar";
let bonus4b = "A movie";
//
let a_splicer = Math.ceil(bonus4a.length / 2);
console.log(bonus4a.slice(0,a_splicer) + bonus4b + bonus4a.slice(a_splicer,bonus4a.length));
//
console.log("");


console.log("5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.");
//
let x2 = "0 vwls hr";
//
let va = x2.split("a");
let vA = x2.split("A");
let ve = x2.split("e");
let vE = x2.split("E");
let vi = x2.split("i");
let vI = x2.split("I");
let vo = x2.split("o");
let vO = x2.split("O");
let vu = x2.split("u");
let vU = x2.split("U");
if ((va[0] === vA[0]) && (ve[0] === vE[0]) && (vi[0] === vI[0]) && (vo[0] === vO[0]) && (vu[0] === vU[0])) {
  console.log(`${x2} does not have a vowel`); // VOWEL NOT FOUND
} else {
  console.log(`${x2} has a vowel`); // VOWEL EXISTS
}
