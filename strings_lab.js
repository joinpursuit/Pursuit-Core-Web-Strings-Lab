//Question 1
//console.log the first character of a string.
let str = `This is a lab`
console.log(str.charAt(0));

//Question 2
//console.log the length of a string.
console.log(str.length);

//Question 3
//console.log the last character of any string.
console.log(str[str.length - 1]);

//Question 4
//Create a code block that takes a single string
//variable, and returns a copy of the string with the last letter capitalized.
let name = `maliq`
let properName = name[0].toUpperCase() + name.slice(1)
console.log(properName);

//Question 5
//Create a drEvil code block that will take a single number
//variable, and log the ' dollars', your code block should
//add '(pinky)' at the end of the amount if it's 1 million.
let money = 1000000
if (money === 1000000){
  console.log(`${money} dollars (pinky)`);
} else {
  console.log(`${money} dollars`);
}

//Quesion 6
//Create a verbing code block. It should take a single string
//variable. If its length is at least 3, it should add 'ing'
//to its end, unless it already ends in 'ing', in which case
//it should add 'ly' instead. If the string length is less than 3,
//it should leave it unchanged.
let verb = `swimming`
if (verb.slice(-3) === `ing` && verb.length >= 3) {
  verb += `ly`
} else {
  verb += `ing`
}
console.log(verb);

//Question 7
//Create a withoutLast code block that takes a single string variable,
//and returns a copy of the string without the last word.
let str2 = `Roses are red diamonds are blue`
str2 = str2.slice(0, 26);
console.log(str2);
