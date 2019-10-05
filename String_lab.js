const day = "Saturday"


// 1. `console.log` the first character of a string.


console.log(day[0]);

 // 2. `console.log` the length of a string.
console.log(day.length)


 // 3. `console.log` the last character of any string. 

 console.log(day[day.length-1])

//  4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized.

console.log(day.slice(0, [day.length-1]) + day[day.length - 1].toUpperCase());