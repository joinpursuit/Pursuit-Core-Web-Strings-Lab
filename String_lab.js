const day = "Saturday"


// 1. `console.log` the first character of a string.


console.log(day[0]);

 // 2. `console.log` the length of a string.
console.log(day.length)


 // 3. `console.log` the last character of any string. 

 console.log(day[day.length-1])

//  4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized.

console.log(day.slice(0, [day.length-1]) + day[day.length - 1].toUpperCase());

// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million.

let num = 10000;
if (num <= 1000000) {
    console.log(num + ' dollars');
} else {
    console.log(num + ' dollars (pinky)');
}
// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
// For example:

const str = "train"

if (str.length >= 3 && str.slice(str.length-3) === "ing"){
    console.log(str+ "ly")
} else if( str.length >= 3){
    console.log(str + "ing")

}else {
    console.log(str)
}

// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.
const withoutlast = "I really like food"

// console.log(withoutlast.split(" ").slice (0, withoutlast.length - 1))

// console.log(withoutlast.length-1)

// let arr = withoutlast.split(" ") 
// console.log(arr.slice (0, arr.length - 1));

// console.log(withoutlast.split(" ").slice (0,withoutlast.split.length));

// console.log(withoutlast.split(" ").length);

let space = 0

let emptyString = ""

for (let i = withoutlast.length-1; i >= 0; i --){
    
    if (withoutlast[i] === " ") {
    break
    }
    space = i
} 
for (let i = 0; i < space; i++) {
    emptyString += withoutlast[i];
}

console.log(emptyString)

// 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.

let str2 = "Today is Wednesday."
if (str2.length % 2 === 1) {
    console.log(`${str2} #`); 
} else {
    console.log(`${str2}`);
}

// 2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.
let endStr = ""

if (str2.length < 3){
    console.log("Error too short")
}else{

    for (let i = str2.length-3; i < str2.length; i++){
        endStr += str2[i];
    }
    console.log(endStr);
}

// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.

let x = "i feel clever today."
let vowel = ["a", "e", "i" , "o" , "u" , "y"]

// if (x[0] === "a" || x[0] === "e" || x[0] === "i" || x[0] === "o" || x[0] === "u" || x[0] === "y") {
//     console.log("is a vowel")
// } else {
//     console.log("is not a vowel")
// }

if(vowel.includes(x[0])){
    console.log ("is a vowel")
}else(
    console.log ("has no vowel")
)

// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`

let string1 = "hello"
let string2 = "world"
let string3 = ""


if (string1.length % 2 === 1) {
    string3 = string1.slice(0, (string1.length / 2)+1) + string2 + string1.slice((string1.length+1) / 2);
console.log(string3);
} else {
    string3 = string1.slice(0, (string1.length / 2)) + string2 + string1.slice((string1.length) / 2);
console.log(string3);
}

