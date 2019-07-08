//1. `console.log` the first character of a string.
let name = 'chuck';

console.log(name[0]);

console.log('---------------------------------------------------------------------------------------------------------');

//2. `console.log` the length of a string.

console.log(name.length);

console.log('---------------------------------------------------------------------------------------------------------');

//3. `console.log` the last character of any string. 

let name2 = 'karoline';

console.log(name[name.length - 1]);
console.log(name2[name2.length - 1]);

console.log('---------------------------------------------------------------------------------------------------------');

//4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. 

let newName = name2.slice(0, name2.length - 1) + name2[name2.length - 1].toUpperCase();
console.log(newName); 

console.log('---------------------------------------------------------------------------------------------------------');
//5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
//your code block should add '(pinky)' at the end of the amount if it's 1 million.

let amount = 1035;

if(amount === 1000000) {
	console.log(amount + ' dollars (pinky)');
}
else if(amount === 1) {
	console.log(amount + ' dollar');
}
else{
	console.log(amount + ' dollars' );
}


console.log('---------------------------------------------------------------------------------------------------------');

//6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to
 //its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3,
 //it should leave it unchanged. 

let verbage = 'chuck';

if(verbage.length < 3) {
	console.log(verbage);
}
else if(verbage.slice(verbage.length - 3) === 'ing') {
	console.log(verbage + 'ly');
}
else {
	console.log(verbage + 'ing');
}


console.log('---------------------------------------------------------------------------------------------------------');
//Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.

let sentence = 'Hello, my name is chuck';
let arr = sentence.split(' ');
console.log(arr);
let newSentence = '';

for(let i = 0; i < arr.length - 1; i++) {
	newSentence += arr[i] + ' ';
}

console.log(newSentence);








