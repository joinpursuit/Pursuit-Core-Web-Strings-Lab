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